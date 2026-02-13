<template>
    <div class="circle-degree m-3 p-3 rounded-circle text-start">
        <div v-if="item.img" class="circle-degree-img">
            <img :src="item.img" alt="Image" >
        </div>

        <div class="d-flex flex-column justify-content-center h-100" :style="item.style">
            <!-- <div class="d-flex align-items-center justify-content-center mb-3"> -->
                <!-- <img :src="item.logo" alt="Logo" class="img-fluid logo-degree me-3"> -->
                <h5 class="fw-bold m-0 mb-3 p-0 subtitle text-center">{{ item.title }}</h5>
            <!-- </div> -->

            <p class="text-primary mb-1">{{ item.school }}</p>
            <p class="circle-degree-description fst-italic">{{ item.description }}</p>

            <div class="circle-degree-footer">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex m-0 p-0 text-secondary">
                        <i class="bi bi-pin-angle"></i>
                        <span class="ms-2">{{ item.place }}</span>
                    </div>

                    <p class="badge-degree m-0">
                        <i class="bi bi-clock"></i>
                        <span class="ms-2">{{ item.date }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DegreeCardComponent',

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    methods: {
        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        }
    }
};
</script>
