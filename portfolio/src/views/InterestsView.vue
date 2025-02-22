<template>
    <div class="container">
        <header id="interests_header">
            <section id="titre" class="w-100">
                <h1 class="mb-4 mt-3 text-primary">{{ title }}</h1>
            </section>
        </header>

        <main id="interests_main" class="pb-5">
            <div v-for="(interest, key) in interests" :key="key" class="align-items-center gx-5 mb-5 row">
                <div v-if="interest.support == 'mc'" class="col-12 col-md-6">
                    <MinecraftComponent />
                </div>
                <div class="col-12 col-md-6">
                    <h5 class="subtitle mb-2 text-start"><strong>{{ interest.title }}</strong></h5>
                    <p class="text-start">{{ interest.description }}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import variables_fr from '@/variables_fr';
import variables_en from '@/variables_en';

import MinecraftComponent from '@/components/MinecraftComponent.vue';

export default {
    name: 'InterestsView',

    components: {
        MinecraftComponent,
    },

    data: () => ({
        title: "",
        interests: {},
        windowWidth: window.innerWidth,
    }),

    created() {
        const language = this.$store.getters.getLanguage;
        const isFrench = language === 'french';

        this.title = isFrench ? variables_fr.interests_page_title : variables_en.interests_page_title;
        this.interests = isFrench ? variables_fr.interests : variables_en.interests;
    },

    mounted() {
        window.addEventListener('resize', this.onResize)
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.onResize)
    },

    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        }
    }
}
</script>
