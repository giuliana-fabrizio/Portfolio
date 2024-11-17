<template>
    <div>
        <header id="projects_header">
            <section id="titre" class="w-100">
                <h1 class="mt-5 text-primary">{{ project?.title }}</h1>
            </section>
        </header>

        <main id="projects_main" class="d-flex justify-content-center pb-5 pt-2">
            <div class="col-md-8">
                <div class="row position-relative">
                    <div v-for="(content, key, id) in project" :key="key" class="col-12">
                        <div v-if="id > 1">
                            <hr v-if="id > 2 && id < project_length" class="mb-5 mt-5">
                            <div v-for="(section, skey) in content" :key="skey">
                                <section v-if="typeof skey == String('string')" class="p-5 pb-0 pt-0">
                                    <div v-if="skey.substring(0, 6) != String('images')">
                                        <h2 v-if="skey == String('title')" class="text-dark mb-5">{{ section }}</h2>
                                        <p v-else v-html="formattedText(String(section))" class="text-xl-start text-secondary mt-3"></p>
                                    </div>
                                    <div v-else>
                                        <div v-for="(image, index) in section" :key="index" class="row justify-content-center">
                                            <div class="col-12 col-md-9">
                                                <img :src="image.path" :alt="image.alt" class="img-fluid img-page-details mt-5">
                                                <p class="text-muted text-center mt-2 fst-italic">{{ image.legend }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
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
            project: null,
            project_length: 0
        };
    },

    created() {
        this.project = this.$store.getters.getProject;
        this.project_length = (Object.keys(this.project).length - 1)
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
