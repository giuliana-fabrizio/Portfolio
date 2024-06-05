<template>
    <div>
        <header id="projects_header" class="text-center">
            <section id="titre" class="w-100">
                <h1 class="mt-5 text-primary">{{ title }}</h1>
            </section>
        </header>
  
        <main id="projects_main" class="py-5">
            <div class="container">
                <div class="row">
                    <div v-for="(project, key) in projects" :key="key" :class="[getClass(Object.keys(projects).length), 'mb-4']">
                        <router-link :to="{ name: 'details', params: { elem: project } }" class="text-decoration-none">
                            <div class="card project-card">
                                <div class="card-body m-3">
                                    <div class="d-flex justify-content-between mb-3">
                                        <h5>{{ project.title }}</h5>
                                        <p class="badge bg-primary text-wrap">{{ project.category }}</p>
                                    </div>
                                    <p class="mb-3" v-html="project.type != 'competence' ? formattedText(truncatedInstructions(project.instructions.text)) : formattedText(project.instructions.text)"></p>
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
    </div>
</template>

<script>
export default {
    name: 'ProjectsView',

    props: {
        title: String,
        projects: Object
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
                return 'col-md-6'; // Prend la moitié de la page
            }
            return 'col-md-4'; // Taille par défaut pour 3 projets ou plus
        }
    }
}
</script>
