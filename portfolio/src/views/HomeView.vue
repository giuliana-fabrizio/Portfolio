<template>
    <div>
        <header id="home_header" style="position: relative;">
            <AnimeHomeBackgroundComponent />
            <section id="titre" class="container" style="position: relative; z-index: 1;">
                <div class="pt-5">
                    <h1 class="mb-4 text-primary">{{ name }}</h1>
                    <h3 class="text-secondary">
                        <AnimeTitleComponent :text="status" :duration="2000" />
                    </h3>
                </div>
                <img src="images/developer.png" class="img-home">
            </section>
        </header>

        <main class="d-flex justify-content-center bg-light p-3 pb-5 pt-5">
            <div class="col-md-7">
                <section id="formation" class="mb-5 text-center">
                    <h5 class="mb-3"><strong>{{ about_me_title }}</strong></h5>
                    <p class="mb-4" v-html="formattedText(about_me)"></p>
                </section>

                <div class="text-center">
                    <AnimeButtonComponent :text="download_cv" :icon="'bi-download'" :href="link_cv" />
                </div>
            </div>
        </main>
        <TopButtonComponent />
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import AnimeHomeBackgroundComponent from '../components/AnimeHomeBackgroundComponent.vue';
import AnimeButtonComponent from '@/components/AnimeButtonComponent.vue';
import AnimeTitleComponent from '../components/AnimeTitleComponent.vue';
import TopButtonComponent from '../components/TopButtonComponent.vue';

export default {
    name: 'HomeView',

    components: {
        AnimeHomeBackgroundComponent,
        AnimeButtonComponent,
        AnimeTitleComponent,
        TopButtonComponent
    },

    data: () => ({
        name: "",
        status: "",
        about_me_title: "",
        about_me: "",
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

            this.link_cv = isFrench ? variables_fr.link_cv : variables_en.link_cv;
            this.download_cv = isFrench ? variables_fr.download_cv : variables_en.download_cv;
        },

        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        }
    }
}
</script>
