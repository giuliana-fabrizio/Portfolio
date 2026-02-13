<template>
    <div class="border-0 col-12 col-md-5 m-5 mt-2" :style="hidden ? 'visibility: hidden' : ''">

        <div class="card-experience p-3 rounded">
            <h5 class="fw-bold subtitle">{{ experience.title }}</h5>

            <p class="m-0 p-0 fw-bold text-primary text-start">{{ experience.company }}</p>

            <div class="row m-0 p-0 text-secondary">
                <div class="col-12 col-lg-6 m-0 p-0 text-start">
                    <i class="bi bi-calendar2-week"></i>
                    <span class="ms-2">{{ experience.date }}</span>
                </div>
                <div class="col-12 col-lg-6 m-0 p-0 text-start">
                    <i class="bi bi-pin-angle"></i>
                    <span class="ms-2">{{ experience.place }}</span>
                </div>
            </div>

            <router-link v-if="experience.redirection" :to="{ name: 'details' }" class="text-decoration-none">
                <button
                    @click="setIdProject()"
                    class="btn btn-more-details d-flex fw-bold justify-content-between p-0">
                    <span class="me-3 p-0">{{ experience.label_redirection }}</span>
                    <i class="bi bi-arrow-up-right-circle"></i>
                </button>
            </router-link>
            <p v-else class="mt-3 text-start">{{ experience.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardExperienceComponent',

    data: () => ({
        displayAlert: false,

        modalStyle: {
            borderRadius: '0.25rem',
            padding: '10px',
        }
    }),

    props: {
        experience: {
            type: Object,
            required: true,
        },
        hidden: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        displayMore() {
            this.displayAlert = !this.displayAlert;
        },

        setIdProject() {
            this.$store.commit('setIdProject', this.experience.redirection);
        }
    }
};
</script>
