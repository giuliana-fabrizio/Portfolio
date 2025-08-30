<template>
    <div class="container">
        <TitleComponent :title="title" />

        <main class="pb-5 pt-2">
            <div
                v-for="(interest, key) in interests"
                :key="key"
                class="align-items-center gx-md-5 mb-5 row">

                <div class="col-12 d-block d-md-none ">
                    <h5 class="subtitle mb-2 text-start"><strong>{{ interest.title }}</strong></h5>
                    <p class="text-start">{{ interest.description }}</p>
                </div>

                <div v-if="key % 2 == 1" class="col-md-6 d-none d-md-block ">
                    <h5 class="subtitle mb-2 text-start"><strong>{{ interest.title }}</strong></h5>
                    <p class="text-start">{{ interest.description }}</p>
                </div>

                <div class="col-12 col-md-6 m-0 p-0">
                    <CarouselComponent
                        v-if="interest.support == 'carousel'"
                        :images="interest.images"
                    />
                    <img
                        v-if="interest.support == 'img'"
                        :src="interest.image"
                        style="max-height: 350px;">
                    <MinecraftComponent v-if="interest.support == 'mc'" />
                    <ModellingComponent
                        v-if="interest.support == 'modelling'"
                        :width="
                            windowWidth >= 1400 ? 665 :
                            windowWidth >= 1200 ? 570 :
                            windowWidth >= 992 ? 480 :
                            windowWidth >= 768 ? 360 :
                            windowWidth >= 576 ? 540 : windowWidth
                        "
                        :height="
                            windowWidth >= 1400 ? 350 :
                            windowWidth >= 1200 ? 350 :
                            windowWidth >= 992 ? 350 :
                            windowWidth >= 768 ? 360 :
                            windowWidth >= 576 ? 270 : windowWidth
                        "
                    />
                    <p class="fst-italic mt-3 text-secondary px-3">{{ interest.legend }}</p>
                </div>

                <div v-if="key % 2 == 0" class="col-12 col-md-6 d-none d-md-block ">
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

import CarouselComponent from '@/components/CarouselComponent.vue';
import MinecraftComponent from '@/components/MinecraftComponent.vue';
import ModellingComponent from '@/components/ModellingComponent.vue';
import TitleComponent from '../components/TitleComponent.vue';

export default {
    name: 'InterestsView',

    components: {
        CarouselComponent,
        MinecraftComponent,
        ModellingComponent,
        TitleComponent
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
