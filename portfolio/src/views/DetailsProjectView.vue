<template>
    <div class="container pe-5 ps-5">
        <TitleComponent :title="project?.title" />
        <main class="pb-5 pt-2">
                <section v-for="(elem, elem_key) in project" :key="elem_key" class="col-12">
                    <DetailsElemComponent :elem="elem" type="h3" />
                    <div v-for="(section, section_key) in elem.sections" :key="section_key">
                        <DetailsElemComponent :elem="section" type="h5" />
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

    created() { this.project = this.$store.getters.getProject; }
};
</script>
