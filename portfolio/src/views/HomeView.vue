<template>
    <div>
        <AnimeBackgroundComponent />

        <div class="container mt-5 pt-5">
            <div class="align-items-center row mx-auto">
                <div class="col-12 col-lg-6 mb-3 mb-lg-0">
                    <div class="home-card mx-auto p-5">
                        <h3 class="mb-3 text-blue">{{ status }}</h3>

                        <h5 class="text-gray mb-4">{{ name }}</h5>

                        <div>
                            <div class="home-situation mb-4">
                                <AnimeTextComponent :text="current_situation" :duration="2000" />
                            </div>
                            <p class="mb-4">{{ presentation }}</p>

                            <div class="download-container">
                                <a :href="link_cv" class="btn-download text-decoration-none">
                                    {{ download_cv }}
                                    <icon class="bi bi-download"></icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6 p-0">
                    <TechSphereComponent />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import AnimeBackgroundComponent from '@/components/AnimeBackgroundComponent.vue';
import AnimeTextComponent from '@/components/AnimeTextComponent.vue';
import TechSphereComponent from '@/components/TechSphereComponent.vue';

export default {
    name: 'HomeView',

    components: {
        AnimeBackgroundComponent,
        AnimeTextComponent,
        TechSphereComponent,
    },

    data: () => ({
        name: "",
        status: "",
        current_situation: "",
        presentation: "",
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

            this.current_situation = isFrench ? variables_fr.current_situation : variables_en.current_situation;
            this.presentation = isFrench ? variables_fr.presentation : variables_en.presentation;

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

<style scoped>
.home-card {
    background-color: var(--blue-7);
    border-radius: 50px;
    box-shadow: 0 3px 12px rgba(162, 179, 203, 1);
    position: relative;
}

.home-situation {
    background: var(--blue-1);
    border: 3px solid var(--blue-8);
    border-radius: 10px;
    color: var(--blue-8);
    max-width: max-content;
    padding: 5px 50px;
}

.download-container {
    background: linear-gradient(45deg, #3acfd5, #3a4ed5);
    border-radius: 10px;
    height: 45px;
    width: 178px;
    position: relative;
}

.btn-download {
    background-color: var(--blue-7);
    border-radius: 7px;
    position: absolute;
    right: 3px;
    top: 3px;
    height: max-content;
    width: max-content;
    padding: 5px;
}

/* .download-container:hover {
    transform: translateY(-3px);
    box-shadow: 0 9px 15px rgba(0, 0, 0, 0.2);
} */

.download-container:hover .btn-download {
    background: linear-gradient(45deg, #3acfd5, #3a4ed5);
    color: var(--white);
}
</style>
