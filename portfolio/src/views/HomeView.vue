<template>
    <div>
        <header id="home_header" style="position: relative;">
            <AnimeBackground />
            <section id="titre" class="container" style="position: relative; z-index: 1;">
                <div class="mt-5">
                    <h1 class="mb-4 text-primary">{{ name }}</h1>
                    <h3 class="text-secondary">
                        <AnimeTitleComponent :text="status" :duration="2000" />
                    </h3>
                </div>
                <img src="images/developer.png" class="image_accueil">
            </section>
        </header>

        <main id="home_main" class="d-flex justify-content-center p-3 pb-5 pt-5">
            <div class="col-md-7">
                <section id="formation" class="mb-5 text-center">
                    <h5 class="mb-3"><strong>{{ about_me_title }}</strong></h5>
                    <p class="mb-4">{{ about_me }}</p>

                    <a class="btn btn-outline-primary rounded-pill w-30" href="/Portfolio/#/all_projects" role="button">
                        {{ my_projects }}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle mb-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                    </a>
                </section>

                <section id="experiences_professionnelles" class="mb-5 text-center">
                    <h5 class="mb-3"><strong>{{ professional_experience_title }}</strong></h5>
                    <p class="mb-4">{{ professional_experience }}</p>
                </section>

                <section id="loisirs" class="mb-5 text-center">
                    <h5 class="mb-3"><strong>{{ hobbies_title }}</strong></h5>
                    <p>{{ hobbies }}</p>
                </section>

                <div class="text-center">
                    <a class="btn btn-primary w-30" :href="link_cv" role="button">
                        {{ download_cv }}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-download mb-1" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                        </svg>
                    </a>
                </div>
            </div>
        </main>
        <TopButtonComponent />
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import AnimeBackground from '../components/AnimeBackground.vue';
import AnimeTitleComponent from '../components/AnimeTitleComponent.vue';
import TopButtonComponent from '../components/TopButtonComponent.vue';

export default {
    name: 'HomeView',

    components: {
        AnimeBackground,
        AnimeTitleComponent,
        TopButtonComponent
    },

    data: () => ({
        name: "",
        status: "",
        about_me_title: "",
        about_me: "",
        my_projects: "",
        professional_experience_title: "",
        professional_experience: "",
        hobbies_title: "",
        hobbies: "",
        download_cv: "",
        link_cv: ""
    }),

    created() {
        this.updateContent();
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

    methods: {
        updateContent() {
            const isFrench = this.language === 'french';

            this.name = isFrench ? variables_fr.name : variables_en.name;
            this.status = isFrench ? variables_fr.status : variables_en.status;

            this.about_me_title = isFrench ? variables_fr.about_me_title : variables_en.about_me_title;
            this.about_me = isFrench ? variables_fr.about_me : variables_en.about_me;
            this.my_projects = isFrench ? variables_fr.my_projects : variables_en.my_projects;

            this.professional_experience_title = isFrench ? variables_fr.professional_experience_title : variables_en.professional_experience_title;
            this.professional_experience = isFrench ? variables_fr.professional_experience : variables_en.professional_experience;

            this.hobbies_title = isFrench ? variables_fr.hobbies_title : variables_en.hobbies_title;
            this.hobbies = isFrench ? variables_fr.hobbies : variables_en.hobbies;

            this.link_cv = isFrench ? variables_fr.link_cv : variables_en.link_cv;
            this.download_cv = isFrench ? variables_fr.download_cv : variables_en.download_cv;
        }
    }
}
</script>
