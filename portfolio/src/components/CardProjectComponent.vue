<template>
    <div
        class="card card_projects bg-light h-100 border-0 rounded"
        @click="setProject(project)">
        <div class="card-body mb-0 m-2 pb-0">
            <div class="d-flex justify-content-between align-items-center mb-3 flex-column flex-lg-row text-center text-md-start">
                <h5 class="subtitle"><strong>{{ project.title }}</strong></h5>
                <p class="badge mt-1 text-wrap" :style=project.category.style>{{ project.category.name }}</p>
            </div>

            <p
                class="text-secondary mb-3 d-xl-block"
                v-html="formattedText(truncatedInstructions(project.instructions.text))">
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
        truncatedInstructions(instructions) {
            const maxLength = this.projects_len <= 2 ? 175 : 100;
            return instructions.substring(0, maxLength) + '...';
        },
        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        },
        setProject(project) {
            this.$store.commit('setProject', project);
        },
    }
};
</script>
