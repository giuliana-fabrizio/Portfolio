<template>
    <div
        class="border-0 col-12 col-md-5 m-5 mt-2"
        :style="hidden ? 'visibility: hidden' : ''">

        <Modal
            v-model="displayAlert"
            :title="experience.title"
            :modalStyle="modalStyle"
            class="p-3">
            <p v-html="formattedText(experience.description)"></p>
            <router-link
                :to="{ name: 'details' }"
                v-if="experience.redirection"
                class="d-flex justify-content-end">
                <button
                    class="btn btn-primary btn-sm mb-3 me-3"
                    @click="setProject(experience.redirection)">
                    <span class="me-1">{{ experience.label_redirection }}</span>
                    <i class="bi bi-zoom-in"></i>
                </button>
            </router-link>
        </Modal>

        <div
            class="card_experiences p-3 rounded">
            <div class="d-flex align-items-center justify-content-center">
                <h5>
                    <strong>{{ experience.title }}</strong>
                </h5>
                <button
                    type="button"
                    class="btn"
                    style="margin-top: -10px;"
                    @click="displayMore()">
                    <i class="bi bi-box-arrow-in-up-right"></i>
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
import VueModal from '@kouts/vue-modal';
import '@kouts/vue-modal/dist/vue-modal.css';

export default {
    name: 'CardExperienceComponent',

    components: {
        'Modal': VueModal
    },

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
        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        },
        setProject(project) {
            this.$store.commit('setProject', project);
        }
    }
};
</script>
