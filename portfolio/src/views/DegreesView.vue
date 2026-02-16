<template>
    <div>
        <AnimeBackgroundComponent />

        <div class="container">
            <TitleComponent :title="title" />

            <div>
                <p class="bg-white text-center text-gray">
                    {{ school_career }}
                </p>
            </div>

            <div class="pt-2">
                <section>
                    <h5><strong class="bg-white subtitle">{{ degrees_title }}</strong></h5>

                    <div class="d-flex flex-wrap justify-content-center">
                        <div v-for="(item, key) in degrees" :key="key">
                            <DegreeCircleComponent :item="item" />
                        </div>
                    </div>
                </section>

                <section class="mt-5">
                    <h5><strong class="bg-white subtitle">{{ certifications_title }}</strong></h5>

                    <div class="d-flex flex-wrap justify-content-center">
                        <div v-for="(item, key) in certifications" :key="key">
                            <CertificationCardComponent :item="item" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import AnimeBackgroundComponent from '@/components/AnimeBackgroundComponent.vue';
import CertificationCardComponent from '@/components/CertificationCardComponent.vue';
import DegreeCircleComponent from '@/components/DegreeCircleComponent.vue';
import TitleComponent from '../components/TitleComponent.vue';

export default {
    name: 'DegreesView',

    components: {
        AnimeBackgroundComponent,
        CertificationCardComponent,
        DegreeCircleComponent,
        TitleComponent,
    },

    data: () => ({
        expand: false,
        title: "",
        school_career: {},
        degrees_title: "",
        degrees: {},
        certifications_title: "",
        certifications: {}
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

            this.title = isFrench ? variables_fr.degrees_page_title : variables_en.degrees_page_title;
            this.school_career = isFrench ? variables_fr.school_career : variables_en.school_career;
            this.degrees_title = isFrench ? variables_fr.degrees_title : variables_en.degrees_title;
            this.degrees = isFrench ? variables_fr.degrees : variables_en.degrees;
            this.certifications_title = isFrench ? variables_fr.certifications_title : variables_en.certifications_title;
            this.certifications = isFrench ? variables_fr.certifications : variables_en.certifications;
        },

        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        },

        setExpand() {
            this.expand = !this.expand;
        }
    }
}
</script>
