<template>
    <div>
        <AnimeBackgroundComponent />

        <div class="container">
            <TitleComponent :title="experiences_page_title" />

            <div class="pt-2">
                <div v-for="(experience, key, pos) in experiences" :key="key" class="d-flex justify-content-center">
                    <CardExperienceComponent :experience="experience" :hidden="pos % 2 != 0"
                        class="d-none d-md-block card-enter-left *" style="position: relative" />
                    <div class="d-flex flex-column align-items-center col-2" style="width: 1px;">
                        <img :src="experience.logo" :alt="experience.company" class="bg-white p-1 img-experience">
                        <div class="vr"></div>
                    </div>
                    <CardExperienceComponent :experience="experience" :hidden="pos % 2 == 0 && windowWidth >= 768"
                        class="card-enter-right" style="position: relative" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import AnimeBackgroundComponent from '@/components/AnimeBackgroundComponent.vue';
import CardExperienceComponent from '../components/CardExperienceComponent.vue';
import TitleComponent from '../components/TitleComponent.vue';

export default {
    name: 'ExperiencesView',

    components: {
        AnimeBackgroundComponent,
        CardExperienceComponent,
        TitleComponent,
    },

    data: () => ({
        experiences_page_title: "",
        experiences: {},
        windowWidth: window.innerWidth
    }),

    created() {
        this.updateContent();
        window.addEventListener('resize', this.updateWindowWidth);
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

            this.experiences_page_title = isFrench ? variables_fr.experiences_page_title : variables_en.experiences_page_title;
            this.experiences = isFrench ? variables_fr.experiences : variables_en.experiences;
        },

        updateWindowWidth() {
            this.windowWidth = window.innerWidth;
        },
    },
}
</script>
