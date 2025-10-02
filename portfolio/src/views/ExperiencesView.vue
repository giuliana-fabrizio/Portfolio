<template>
    <div class="container">
        <TitleComponent :title="experiences_page_title" />

        <main class="pb-5 pt-2">
            <div
                v-for="(experience, key, pos) in experiences"
                :key="key"
                class="d-flex justify-content-center">
                <CardExperienceComponent
                    :experience="experience"
                    :hidden="pos % 2 != 0"
                    class="d-none d-md-block card-enter-left *"/>
                <div class="d-flex flex-column align-items-center col-2" style="width: 1px;">
                    <img
                        :src="experience.logo"
                        :alt="experience.company"
                        class="p-1"
                        style="width: 45px">
                    <div class="vr"></div>
                </div>
                <CardExperienceComponent
                    :experience="experience"
                    :hidden="pos % 2 == 0 && windowWidth >= 768"
                    class="card-enter-right"/>
            </div>
        </main>
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import CardExperienceComponent from '../components/CardExperienceComponent.vue';
import TitleComponent from '../components/TitleComponent.vue';

export default {
    name: 'ExperiencesView',

    components: {
        CardExperienceComponent,
        TitleComponent
    },

    data: () => ({
        experiences_page_title: "",
        experiences: {},
        windowWidth: window.innerWidth
    }),

    created() {
        const language = this.$store.getters.getLanguage;
        const isFrench = language === 'french';

        this.experiences_page_title = isFrench ? variables_fr.experiences_page_title : variables_en.experiences_page_title;
        this.experiences = isFrench ? variables_fr.experiences : variables_en.experiences;

        window.addEventListener('resize', this.updateWindowWidth);
    },

    methods: {
        updateWindowWidth() {
            this.windowWidth = window.innerWidth;
        },
    },
}
</script>
