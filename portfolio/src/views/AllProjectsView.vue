<template>
    <div>
        <header id="all_projects_header">
            <section id="titre" class="w-100">
                <h1 class="mb-4 mt-5 text-primary">{{ title }}</h1>
                <p class="text-secondary">{{introText}}</p>
            </section>
        </header>

        <main id="all_projects_main" class="d-flex justify-content-center pb-5">
            <div class="container">
                <div class="row">
                    <div v-for="(project, key) in projects" :key="key" :class="[getClass(Object.keys(projects).length), 'mb-4']">
                        <router-link :to="{ name: 'details' }" class="text-decoration-none">
                            <div class="card bg-light h-100 shadow-sm border-0 rounded" @click="setProject(project)" style="background-color: #f4f4f9; transition: transform 0.3s, box-shadow 0.3s;">
                                <div class="card-body m-3">
                                    <div class="d-flex justify-content-between align-items-center mb-3 flex-column flex-md-row text-center text-md-start">
                                        <h5 style="color:#555"><strong>{{ project.title }}</strong></h5>
                                        <p class="badge bg-primary text-wrap">{{ project.category }}</p>
                                    </div>
                                    <p class="text-secondary mb-3 d-xl-block" v-html="formattedText(project.technologies ? truncatedInstructions(project.instructions.text) : project.instructions.text)"></p>
                                    <div class="d-flex flex-wrap">
                                        <span
                                            v-for="(technologie, index) in project.technologies"
                                            :key="index"
                                            :class="[technologie.class, 'badge', 'text-wrap', 'me-2', 'mb-2']">
                                            {{ technologie.name }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </main>
        <TopButtonComponent />
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import TopButtonComponent from '../components/TopButtonComponent.vue';

export default {
    name: 'AllProjectsView',

    components: {
        TopButtonComponent
    },

    data: () => ({
        title: "",
        introText: "",
        projects: {},
    }),

    created() {
        const language = this.$store.getters.getLanguage;
        const isFrench = language === 'french';

        this.title = isFrench ? variables_fr.projects_page_title : variables_en.projects_page_title;
        this.introText = isFrench ? variables_fr.projects_page_presentation : variables_en.projects_page_presentation;
        this.projects = isFrench ? variables_fr.projects : variables_en.projects;
    },

    methods: {
        truncatedInstructions(instructions) {
            const maxLength = Object.keys(this.projects).length <= 2 ? 175 : 100;
            if (instructions.length > maxLength) {
                return instructions.substring(0, maxLength) + '...';
            }
            return instructions;
        },
        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        },
        getClass(length) {
            if (length <= 2) {
                return 'col-md-6';
            }
            return 'col-12 col-sm-6 col-md-4';
        },
        setProject(project) {
            this.$store.commit('setProject', project);
        }
    }
}
</script>
