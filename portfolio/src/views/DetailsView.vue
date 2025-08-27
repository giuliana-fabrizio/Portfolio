<template>
    <div>
        <TitleComponent :title="project?.title" />

        <main class="d-flex justify-content-center pb-5 pt-2">
            <div class="col-md-8">
                <div class="row position-relative">
                    <div v-for="(content, key, id) in project" :key="key" class="col-12">
                        <section v-if="id > 1 && id < project_length">
                            <!-- <hr v-if="id > 2" class="mb-5 mt-5"> -->
                            <div v-for="(section, skey) in content" :key="skey">
                                <div v-if="skey.substring(0, 6) != String('images')">
                                    <h3 v-if="skey == String('title')" class="text-dark mt-5 mb-3">
                                        <!-- TODO text-xl-start  ? -->
                                        {{ section }}
                                    </h3>
                                    <p v-else v-html="formattedText(String(section))"
                                        class="text-start text-secondary mb-4"></p>
                                </div>
                                <div v-else>
                                    <div v-for="(image, index) in section" :key="index"
                                        class="row justify-content-center">
                                        <div class="col-12 col-md-9">
                                            <img :src="image.path" :alt="image.alt"
                                                class="img-fluid img-page-details mt-5">
                                            <p class="text-muted text-center mt-2 fst-italic">{{ image.legend }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        <TopButtonComponent />
    </div>
</template>

<script>
import TitleComponent from '../components/TitleComponent.vue';
import TopButtonComponent from '../components/TopButtonComponent.vue';

export default {
    name: 'DetailsView',

    components: {
        TitleComponent,
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
