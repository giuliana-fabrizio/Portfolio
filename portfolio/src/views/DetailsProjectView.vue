<template>
    <div>
        <AnimeBackgroundComponent />
        <div class="container mb-5">
            <TitleComponent :title="project?.title" />

            <div class="row align-items-center">
                <div class="col-12 col-md-8">
                    <p v-html="formattedText(String(project.introduction))" class="bg-white mb-2 text-gray"></p>

                    <div class="d-flex flex-wrap">
                        <div v-for="(technologie, index) in project.technologies" :key="index" class="foreground me-3">
                            <p class="badge bg-primary">{{ technologie.name }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4">
                    <div class="d-flex justify-content-between">
                        <div v-if="project.git" class="link-container github-container">
                            <a class="btn btn-link mx-auto text-decoration-none" :href="project.git.link"
                                target="_blank">
                                {{ project.git.label }}
                                <i class="bi bi-github"></i>
                            </a>
                        </div>
                        <div v-if="project.slides" class="link-container slides-container">
                            <a class="btn btn-link mx-auto text-decoration-none" :href="project.slides.link"
                                target="_blank">
                                {{ project.slides.label }}
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <section v-for="(elem, keye) in project" :key="keye">
                    <div class="row align-items-center">
                        <DetailsElemComponent :elem="elem" :isSection="false" />

                        <div v-for="(section, keys) in elem.sections" :key="keys">
                            <DetailsElemComponent :elem="section" :isSection="true" />
                        </div>
                    </div>
                </section>
            </div>

            <TopButtonComponent />
        </div>
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import AnimeBackgroundComponent from '@/components/AnimeBackgroundComponent.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import TopButtonComponent from '@/components/TopButtonComponent.vue';
import DetailsElemComponent from '@/components/DetailsElemComponent.vue';

export default {
    name: 'DetailsProjectView',

    components: {
        AnimeBackgroundComponent,
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

<style scoped>
.link-container {
    background: linear-gradient(45deg, var(--blue-2), var(--blue-8));
    border-radius: 10px;
    height: 44px;
    position: relative;
}

.github-container {
    width: 87px;
}

.slides-container {
    width: 178px;
}

.btn-link {
    background-color: var(--bg);
    border-radius: 7px;
    color: var(--text-color);
    position: absolute;
    right: 4px;
    top: 4px;
    height: max-content;
    width: max-content;
    padding: 5px;
}

.slides-container .btn-link {
    width: 170px;
}

.link-container:hover .btn-link {
    background: linear-gradient(45deg, var(--blue-2), var(--blue-8));
    border: none;
    color: var(--white);
}
</style>
