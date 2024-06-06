<template>
    <div>
        <header id="all_projects_header">
            <section id="titre" class="w-100">
                <h1 class="mt-5 text-primary">Mes projets</h1>
            </section>
        </header>

        <main id="all_projects_main">
            <div class="container">
                <div v-for="(experience, key) in experiences" :key="key">
                    <h3 class="heading">{{ experience.title }}</h3>
                    <div v-for="(year, index) in experience.years" :key="index" class="projects">
                        <div class="project-category-image">
                            <img src="images/developer.webp" class="project-category-image" />
                        </div>
                        <div class="project-category-info">
                            <h5>{{ year.category }}</h5>
                            <p>{{ year.summary }}</p>
                            <router-link :to="{ name: 'projects' }" class="btn btn-primary mt-3">
                                <div @click="setProjects(year)">Voir les projets</div>
                            </router-link>
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
