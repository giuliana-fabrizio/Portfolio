<template>
    <div class="container pe-5 ps-5">
        <TitleComponent :title="project?.title" />
        <div class="pb-5 pt-2">
            <section v-for="(elem, elem_key) in project" :key="elem_key">

                <h3 v-if="elem.title" class="fw-bold text-dark mt-5 mb-3">{{ elem.title }}</h3>

                <DetailsElemComponent :elem="elem" :subpart="false" />

                <div v-for="(section, section_key) in elem.sections" :key="section_key" class="card rounded mt-3 p-3">
                    <DetailsElemComponent :elem="section" :display_subtitle="true" />
                </div>
            </section>
        </div>
        <TopButtonComponent />
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import DetailsElemComponent from '@/components/DetailsElemComponent.vue';
import TitleComponent from '../components/TitleComponent.vue';
import TopButtonComponent from '../components/TopButtonComponent.vue';

export default {
    name: 'DetailsProjectView',

    components: {
        DetailsElemComponent,
        TitleComponent,
        TopButtonComponent
    },

    data() {
        return {
            id_project: null,
            project: null
        };
    },

    created() {
        this.id_project = this.$store.getters.getIdProject;
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
            this.project = isFrench ? variables_fr.projects[this.id_project] : variables_en.projects[this.id_project];
        },

        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        }
    }
};
</script>
