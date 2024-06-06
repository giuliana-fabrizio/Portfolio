<template>
    <div>
        <header id="projects_header" class="text-center">
            <section id="titre" class="w-100">
                <h1 class="mt-5 text-primary">{{ data.category }}</h1>
            </section>
        </header>
  
        <main id="projects_main" class="py-5">
            <div class="container">
                <div class="row">
                    <div v-for="(project, key) in data.projects" :key="key" :class="[getClass(Object.keys(data.projects).length), 'mb-4']">
                        <router-link :to="{ name: 'details' }" class="text-decoration-none">
                            <div class="card project-card" @click="setProject(project)">
                                <div class="card-body m-3">
                                    <div class="custom-card-header d-flex justify-content-between align-items-center mb-3">
                                        <h5><strong>{{ project.title }}</strong></h5>
                                        <p class="badge bg-primary text-wrap">{{ project.category }}</p>
                                    </div>

                                    <p class="custom-text-size mb-3" v-html="formattedText(project.technologies ? truncatedInstructions(project.instructions.text) : project.instructions.text)"></p>
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

    data() {
        return {
            data: null
        };
    },

    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.loadData();
        });
    },

    methods: {
        loadData() {
            this.data = this.$store.getters.getProjects;
        },
        truncatedInstructions(instructions) {
            const maxLength = Object.keys(this.data.projects).length <= 2 ? 175 : 100;
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
            return 'col-md-4';
        },
        setProject(project) {
            this.$store.commit('setProject', project);
        }
    }
}
</script>

<style>
@media (max-width: 1200px) {
    .custom-text-size {
        display: none !important;
    }
}

@media (max-width: 1000px) {
    .custom-card-header {
        display: block !important;
        text-align: center;
    }
}
</style>
