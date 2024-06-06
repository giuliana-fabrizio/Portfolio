<template>
    <div>
        <header id="all_projects_header">
            <section id="titre" class="w-100">
                <h1 class="mt-5 text-primary">Mes projets</h1>
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
                                <router-link :to="{ name: 'projects' }" class="btn btn-primary mt-2" @click="setProjects(year)">
                                    Voir les projets
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
import variables from '../variables.js';

export default {
    name: 'AllProjectsView',

    data: () => ({
        experiences: {},
    }),

    created() {
        this.experiences = variables.experiences;
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
