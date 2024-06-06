<template>
    <div>
        <header id="all_projects_header">
            <section id="titre" class="w-100">
                <h1 class="mt-5 text-primary">{{ title }}</h1>
            </section>
        </header>

        <main id="all_projects_main" class="d-flex justify-content-center p-3 pb-5 pt-5">
            <div class="col-md-7">
                <div v-for="(experience, key) in experiences" :key="key">
                    <h3 class="heading">{{ experience.title }}</h3>
                    <div v-for="(year, index) in experience.years" :key="index" class="container mb-4 p-3 bg-white rounded shadow">
                        <div class="row d-flex justify-content-center">
                            <div class="col-4 d-none d-md-flex align-items-center">
                                <img src="images/case.png" class="img-fluid" style="padding: 15px; width: 200px;">
                            </div>
                            <div class="col-8">
                                <h5 class="text-dark mb-3" style="font-size: 1.3em;">{{ year.category }}</h5>
                                <p class="text-secondary" style="font-size: 0.9em;">{{ year.summary }}</p>
                                <router-link :to="{ name: 'projects' }" class="btn btn-primary mt-2">
                                    <div @click="setProjects(year)">{{ see_projects }}</div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

export default {
    name: 'AllProjectsView',

    data: () => ({
        title: "",
        experiences: {},
        see_projects: ""
    }),

    created() {
        const language = this.$store.getters.getLanguage;
        const isFrench = language === 'french';

        this.title = isFrench ? variables_fr.projects_page_title : variables_en.projects_page_title;
        this.experiences = isFrench ? variables_fr.experiences : variables_en.experiences;
        this.see_projects = isFrench ? variables_fr.more_projects : variables_en.more_projects;
    },

    methods: {
        setProjects(projects) {
            this.$store.commit('setProjects', projects);
        }
    }
}
</script>

<style>
@media (max-width: 770px) {
    .display-summary {
        display: none !important;
    }
}
</style>
