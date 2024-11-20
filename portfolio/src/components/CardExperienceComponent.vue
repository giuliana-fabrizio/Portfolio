<template>
    <div
        class="border-0 col-12 col-md-5 m-5 mt-2"
        :style="hidden ? 'visibility: hidden' : ''">
        <div
            v-if="displayAlert"
            class="modal-overlay d-flex align-items-center justify-content-center rounded h-100 w-100">
            <div class="modal-content bg-light p-2">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">
                        <strong>{{ experience.title }}</strong>
                    </h1>
                    <button type="button" class="btn-close" @click="displayMore()"></button>
                </div>
                <div class="modal-body">
                    <p
                        class="text-start mb-3"
                        v-html="formattedText(experience.description)"></p>
                </div>
            </div>
        </div>


        <div
            class="card_experiences p-3 rounded">
            <div class="card_experiences d-flex align-items-center justify-content-center rounded">
                <h5>
                    <strong>{{ experience.title }}</strong>
                </h5>
                <button
                    type="button"
                    class="btn"
                    style="margin-top: -10px;"
                    @click="displayMore()">
                    <i class="bi bi-zoom-in"></i>
                </button>
            </div>

            <div class="row m-0 p-0">
                <div class="col-12 col-xl-6 mb-0">
                    <div>
                        <i class="bi bi-building"></i>
                        <span class="ms-2">{{ experience.company }}</span>
                    </div>
                    <div>
                        <i class="bi bi-pin-angle"></i>
                        <span class="ms-2">{{ experience.place }}</span>
                    </div>
                </div>
                <div class="col-12 col-xl-6 mb-0">
                    <div>
                        <i class="bi bi-file-text"></i>
                        <span class="ms-2">{{ experience.type }}</span>
                    </div>
                    <div class="text-secondary">
                        <i class="bi bi-calendar2-week"></i>
                        <span class="ms-2">{{ experience.date }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardExperienceComponent',

    data: () => ({
        displayAlert: false
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
        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        }
    }
};
</script>
