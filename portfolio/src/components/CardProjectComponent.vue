<template>
    <div
        class="card card_projects bg-light h-100 border-0 rounded"
        @click="setIdProject()">
        <div class="card-body mb-0 m-2 pb-0">
            <div class="d-flex justify-content-between align-items-center mb-3 flex-column flex-lg-row text-center text-md-start">
                <h5 class="subtitle"><strong>{{ project.title }}</strong></h5>
                <p class="badge mt-1 text-wrap" :style=project.category.style>{{ project.category.name }}</p>
            </div>

            <p
                class="text-gray mb-3 d-xl-block text-intro"
                v-html="formattedText(truncatedIntroduction(project.introduction.text))">
            </p>
        </div>
        <div class="card-footer bg-light border-0 mb-1">
            <div class="d-flex flex-wrap justify-content-center">
                <div
                    v-for="(technologie, index) in project.technologies"
                    :key="index"
                    class="div-img-technos me-2">
                    <img
                        :src="technologie.logo"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        :data-bs-title="technologie.name"
                        class="img-technos">
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
        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        },
        setIdProject() {
            this.$store.commit('setIdProject', this.id_project);
        },
    }
};
</script>

<style scoped>
.card_projects {
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.card_projects:hover {
    transform: translateY(-3px);
    box-shadow: 0 9px 15px rgba(0, 0, 0, 0.2);
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
