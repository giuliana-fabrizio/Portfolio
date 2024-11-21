<template>
    <div class="container">
        <header id="experiences_header">
            <section id="titre" class="w-100">
                <h1 class="mb-4 mt-3 text-primary">{{ experiences_page_title }}</h1>
            </section>        
        </header>

        <main id="experiences_main" class="pb-5 pt-2">
            <div
                v-for="(experience, key, pos) in experiences"
                :key="key"
                class="d-flex justify-content-center">
                <CardExperienceComponent :experience="experience" :hidden="pos % 2 != 0" />
                <div class="d-flex flex-column align-items-center col-2" style="width: 1px;">
                    <img
                        :src="experience.logo"
                        :alt="experience.company"
                        class="p-1"
                        style="width: 40px">
                    <div class="vr"></div>
                </div>
                <CardExperienceComponent :experience="experience" :hidden="pos % 2 == 0" />
            </div>
        </main>
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import CardExperienceComponent from '../components/CardExperienceComponent.vue';

export default {
    name: 'ExperiencesView',

    components: {
        CardExperienceComponent
    },

    data: () => ({
        experiences_page_title: "",
        experiences: {}
    }),

    created() {
        const language = this.$store.getters.getLanguage;
        const isFrench = language === 'french';

        this.experiences_page_title = isFrench ? variables_fr.experiences_page_title : variables_en.experiences_page_title;
        this.experiences = isFrench ? variables_fr.experiences : variables_en.experiences
    }
}
</script>
