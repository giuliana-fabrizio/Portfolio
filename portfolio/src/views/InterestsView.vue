<template>
    <div>
        <AnimeBackgroundComponent />

        <div class="container">
            <TitleComponent :title="title" />

            <div v-for="(interest, key) in interests" :key="key" class="align-items-center gx-md-5 mb-5 row">

                <div class="col-12 d-block d-md-none foreground">
                    <CardInterestComponent :item="interest" card_style="card-interest-left" />
                </div>

                <div v-if="key % 2 == 1" class="col-12 col-md-6 d-none d-md-block foreground">
                    <CardInterestComponent :item="interest" card_style="card-interest-left" />
                </div>

                <div class="col-12 col-md-6 foreground m-0 p-0 mt-3 mt-md-0">
                    <CarouselComponent v-if="interest.support == 'carousel'" :images="interest.images" />

                    <img v-if="interest.support == 'img'" :src="interest.image" class="img-interest">

                    <MinecraftComponent v-if="interest.support == 'mc'" />

                    <ModellingComponent v-if="interest.support == 'modelling'" :width="windowWidth >= 1400 ? 665 :
                        windowWidth >= 1200 ? 570 :
                            windowWidth >= 992 ? 480 :
                                windowWidth >= 768 ? 360 :
                                    windowWidth >= 576 ? 540 : windowWidth
                        " :height="windowWidth >= 1400 ? 350 :
                            windowWidth >= 1200 ? 350 :
                                windowWidth >= 992 ? 350 :
                                    windowWidth >= 768 ? 360 :
                                        windowWidth >= 576 ? 270 : windowWidth
                            " />

                    <p class="fst-italic mt-3 text-center text-gray px-3">
                        <span class="bg-white">{{ interest.legend }}</span>
                    </p>
                </div>

                <div v-if="key % 2 == 0" class="col-12 col-md-6 d-none d-md-block foreground">
                    <CardInterestComponent :item="interest" card_style="card-interest-right" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import variables_fr from '@/variables_fr';
import variables_en from '@/variables_en';

import AnimeBackgroundComponent from '@/components/AnimeBackgroundComponent.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';
import MinecraftComponent from '@/components/MinecraftComponent.vue';
import ModellingComponent from '@/components/ModellingComponent.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import CardInterestComponent from '@/components/CardInterestComponent.vue';

export default {
    name: 'InterestsView',

    components: {
        AnimeBackgroundComponent,
        CarouselComponent,
        CardInterestComponent,
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

    mounted() {
        window.addEventListener('resize', this.onResize)
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.onResize)
    },

    methods: {
        updateContent() {
            const isFrench = this.language === 'french';

            this.title = isFrench ? variables_fr.interests_page_title : variables_en.interests_page_title;
            this.interests = isFrench ? variables_fr.interests : variables_en.interests;
        },

        onResize() {
            this.windowWidth = window.innerWidth
        }
    }
}
</script>

<style scoped>
.img-interest {
    max-height: 350px;
}
</style>
