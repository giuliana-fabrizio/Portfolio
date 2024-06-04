<template>
    <div>
        <header id="projects_header">
            <section id="titre" class="w-100">
                <h1 class="mt-5 text-primary">Mes projets</h1>
            </section>
        </header>
  
        <main id="projects_main">
            <div class="container">
                <div v-for="(experience, key) in experiences" :key="key">
                    <h3 class="heading">{{ experience.title }}</h3>
                    <div v-for="(year, index) in experience.years" :key="index" class="project">
                        <div class="project-image">
                            <img src="images/developer.webp" class="project-image" />
                        </div>
                        <div class="project-info">
                            <h5>{{ year.category }}</h5>
                            <p>{{ year.summary }}</p>
                            <a href="#">Voir les projets</a>
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
    }
}

</script>
  