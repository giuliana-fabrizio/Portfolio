<template>
    <div class="card card-certification m-3 p-3">
        <div class="d-flex align-items-center">
            <img :src="item.logo" alt="Logo" class="img-fluid img-thumbnail logo-certification me-3">

            <div>
                <h5 class="fw-bold m-0 p-0 subtitle text-center">{{ item.title }}</h5>

                <hr>

                <div class="mb-1">
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="m-0">
                            <i class="bi bi-pin-angle"></i>
                            <span class="ms-2">{{ item.school }}</span>
                        </p>

                        <p class="m-0">
                            <i class="bi bi-clock"></i>
                            <span class="ms-2">{{ item.date }}</span>
                        </p>
                    </div>
                </div>

                <p class="fst-italic m-0">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CertificationCircleComponent',

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

<style scoped>
.card-certification {
    background: linear-gradient(45deg, #cbe0fe, #f0f6fe);
    border: 3px solid #00244C;
    border-radius: 50px 0px;
    /* color: white; */
}

.logo-certification {
    border-radius: 30px;
    height: 70px;
    width: 70px;
}
</style>
