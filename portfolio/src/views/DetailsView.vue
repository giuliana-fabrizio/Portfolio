<template>
    <div>
        <header id="projects_header">
            <section id="titre" class="w-100">
                <h1 class="mt-5 text-primary">{{ project?.title }}</h1>
            </section>
        </header>

        <main id="projects_main" class="d-flex justify-content-center pb-5 pt-5">
            <div class="col-md-8">
                <div class="row position-relative">
                    <div v-for="(section, key) in project" :key="key" class="col-12">
                        <section v-if="section.title && section.text" class="p-5 pb-0 pt-0">
                            <h2 class="text-dark mb-5">{{ section.title }}</h2>
                            <p v-html="formattedText(section.text)" class="text-xl-start text-secondary mt-3"></p>
                            <div v-for="(image, index) in section.images" :key="index" class="row justify-content-center">
                                <div class="col-12 col-md-9">
                                    <img :src="image.path" :alt="image.alt" class="img-fluid img-page-details mt-5">
                                    <p class="text-muted text-center mt-2 fst-italic">{{ image.legend }}</p>
                                </div>
                            </div>
                            <hr class="mb-5 mt-5">
                        </section>
                    </div>
                </div>
            </div>
        </main>
        <TopButtonComponent />
    </div>
</template>

<script>
import TopButtonComponent from '../components/TopButtonComponent.vue';

export default {
    name: 'DetailsView',

    components: {
        TopButtonComponent
    },

    data() {
        return {
            project: null
        };
    },

    created() {
        this.project = this.$store.getters.getProject;
    },

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
