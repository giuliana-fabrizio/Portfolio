<template>
    <section :class="[margin ? '' : 'mt-md-0', 'mt-5', 'row']">
        <h5><strong class="subtitle">{{ title }}</strong></h5>
        <div v-for="(item, key) in items" :key="key" class="col-6 col-lg-4 mt-3">
            <div @click="toggleFlip(key)" class="card p-1" role="button" style="height: 200px;">

                <div :class="[flippedCards[key] ? 'd-none' : 'd-block', 'me-1', 'position-relative']">
                    <i class="bi bi-journal-text position-absolute text-secondary icon-degree-details"></i>
                </div>

                <div :class="[{ flipped: flippedCards[key] }, 'flip-inner', 'my-auto']">

                    <!-- Front -->
                    <div :class="[flippedCards[key] ? 'd-none' : 'd-block', 'mb-0', 'flip-front']">
                        <img :src="item.logo" alt="Logo" class="img-fluid mb-2" style="max-height: 115px;">
                        <p class="mb-0">{{ item.title }}</p>
                    </div>

                    <!-- Back -->
                    <div :class="[flippedCards[key] ? 'd-block' : 'd-none', 'flip-back']">
                        <p><strong>{{ item.title }}</strong></p>

                        <p v-html="item.speciality" class="mb-0"></p>

                        <div
                            v-if="item.speciality"
                            class="border-2 border-top mb-2 mt-2 mx-auto pb-1 w-75">
                        </div>

                        <div class="mb-1">
                            <i class="bi bi-building"></i>
                            <span class="ms-2">{{ item.school }}</span>
                        </div>

                        <div v-if="item.place" class="mb-1 text-secondary">
                            <i class="bi bi-pin-angle"></i>
                            <span class="ms-2">{{ item.place }}</span>
                        </div>

                        <div class="text-secondary">
                            <i class="bi bi-calendar2-week"></i>
                            <span class="ms-2">{{ item.date }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'DegreeSectionComponent',

    props: {
        title: {
            type: String,
            required: true,
        },
        margin: {
            type: Boolean,
            required: false
        },
        items: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            flippedCards: {}
        };
    },

    methods: {
        toggleFlip(key) {
            this.$set(this.flippedCards, key, !this.flippedCards[key]);
        }
    }
};
</script>
