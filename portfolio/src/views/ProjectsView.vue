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
                    <div v-for="(project, key) in projects" :key="key" class="col-md-4 mb-4">
                        <div class="card project-card">
                            <div class="card-body m-3">
                                <div class="d-flex justify-content-between mb-3">
                                    <h5>{{ project.title }}</h5>
                                    <p class="badge bg-primary text-wrap">{{ project.category }}</p>
                                </div>
                                <p class="mb-3">{{ truncatedInstructions(project.instructions) }}</p>
                                <div class="d-flex flex-wrap">
                                    <span
                                        v-for="(technologie, index) in project.technologies"
                                        :key="index"
                                        :class="[colors[index % colors.length], 'badge', 'text-wrap', 'me-2', 'mb-2']">
                                        {{ technologie }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'ProjectsView',

    data: () => ({
        colors: ["bg-success", "bg-danger", "bg-secondary", "bg-warning", "bg-info", "bg-light", "bg-dark"],
    }),

    props: {
        title: String,
        projects: Array
    },

    methods: {
        truncatedInstructions(instructions) {
            const maxLength = 100;
            if (instructions.length > maxLength) {
                return instructions.substring(0, maxLength) + '...';
            }
            return instructions;
        }
    }
}
</script>
