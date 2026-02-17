<template>
    <div class="card card-project bg-light h-100 border-0 rounded" @click="setIdProject()">

        <div class="card-project-img">
            <img :src="project.image_bg" class="card-img-top img-fluid">
        </div>

        <div class="card-body mb-0 pb-0">
            <div
                class="d-flex justify-content-between align-items-center mb-3 text-center text-md-start">
                <h5 class="subtitle"><strong>{{ project.title }}</strong></h5>
                <p class="badge mt-1 text-wrap" :style=project.category.style>{{ project.category.name }}</p>
            </div>

            <p class="text-gray d-xl-block text-intro" v-html="truncatedIntroduction(project.introduction)"></p>
        </div>

        <div class="card-footer border-0">
            <div class="d-flex flex-wrap justify-content-center">
                <div v-for="(technologie, index) in project.technologies" :key="index" class="div-img-technos me-2">
                    <img :src="technologie.logo" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip" :data-bs-title="technologie.name" class="img-technos">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardProjectComponent',

    props: {
        id_project: {
            type: String,
            required: true
        },
        project: {
            type: Object,
            required: true,
        },
        projects_len: {
            type: Number,
            required: true
        }
    },

    methods: {
        truncatedIntroduction(introduction) {
            const maxLength = this.projects_len <= 2 ? 175 : 100;
            return introduction.substring(0, maxLength) + '...';
        },
        setIdProject() {
            this.$store.commit('setIdProject', this.id_project);
        },
    }
};
</script>

<style scoped>
.card-project {
    border-radius: var(--card-radius) !important;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.card-project:hover {
    transform: translateY(-3px);
    box-shadow: 0 9px 15px rgba(0, 0, 0, 0.2);
}

.card-img-top {
    border-radius: var(--card-radius) var(--card-radius) 0px 0px;
    height: 150px;
    object-fit: cover;
}

.card-footer {
    background: transparent !important;
}

.text-intro a {
    color: var(--blue-5) !important;
    text-decoration: none;
}

.div-img-technos {
    width: 30px;
}

.img-technos {
    max-height: 20px;
    max-width: 30px;
}
</style>
