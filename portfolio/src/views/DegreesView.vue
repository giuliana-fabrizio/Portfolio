<template>
    <div class="container">
        <header id="degrees_header">
            <section id="titre" class="w-100">
                <h1 class="mb-4 mt-3 text-primary">{{ title }}</h1>
            </section>        
        </header>

        <main id="degrees_main" class="pb-5 pt-2">
            <div class="align-items-center gx-md-5 p-1 row">
                <div class="card_degrees_experiences card col-12 col-md-6 col-xl-5 col-xxl-4">
                    <div class="align-items-center d-flex justify-content-between justify-content-md-center mb-3 mt-3">
                        <h5 class="subtitle m-0"><strong>{{ school_career.title }}</strong></h5>
                        <button @click="setExpand()" class="btn d-md-none">
                            <i v-if="!expand" class="bi bi-chevron-compact-down"></i>
                            <i v-else class="bi bi-chevron-compact-up"></i>
                        </button>
                    </div>
                    <p
                        v-html="formattedText(school_career.content)"
                        :class="[expand ? 'd-block' : 'd-none', 'd-md-block', 'text-start']">
                    </p>
                </div>

                <div class="col-12 col-md-6 col-xl-7 col-xxl-8">
                    <DegreeSectionComponent
                        :title="degrees_title"
                        :items="degrees" />
                    <DegreeSectionComponent
                        :title="certifications_title"
                        :margin="true"
                        :items="certifications" />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import DegreeSectionComponent from '@/components/DegreeSectionComponent.vue';

export default {
    name: 'DegreesView',

    components: {
        DegreeSectionComponent
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
        const language = this.$store.getters.getLanguage;
        const isFrench = language === 'french';

        this.title = isFrench ? variables_fr.degrees_page_title : variables_en.degrees_page_title;
        this.school_career = isFrench ? variables_fr.school_career : variables_en.school_career;
        this.degrees_title = isFrench ? variables_fr.degrees_title : variables_en.degrees_tile;
        this.degrees = isFrench ? variables_fr.degrees : variables_en.degrees;
        this.certifications_title = isFrench ? variables_fr.certifications_title : variables_en.certifications_title;
        this.certifications = isFrench ? variables_fr.certifications : variables_en.certifications;
    },

    methods: {
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
