<template>
    <div class="container pe-5 ps-5">
        <TitleComponent :title="project?.title" />
        <main class="pb-5 pt-2">
            <section v-for="(elem, elem_key) in project" :key="elem_key">

                <h3 v-if="elem.title" class="fw-bold text-dark mt-5 mb-3">{{ elem.title }}</h3>
                <p v-if="elem.text" v-html="formattedText(String(elem.text))" class="m-0 text-start text-secondary"></p>

                <DetailsElemComponent :elem="elem" :subpart="false" />

                <div v-for="(section, section_key) in elem.sections" :key="section_key" class="card mt-3 p-3">
                    <DetailsElemComponent :elem="section" :display_subtitle="true" />
                </div>
            </section>
        </main>
        <TopButtonComponent />
    </div>
</template>

<script>
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
        return { project: null };
    },

    created() { this.project = this.$store.getters.getProject; },

    methods: {
        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        }
    }
};
</script>
