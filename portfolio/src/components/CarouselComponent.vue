<template>
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div v-for="(image, key) in images" :key="key" :class="['carousel-item', key === 0 ? 'active' : '']">
                <img :src="image" alt="Image" class="carousel-img d-block img-fluid w-100">
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'CarouselComponent',

    props: {
        images: {
            type: [],
            required: true
        }
    }
}
</script>

<style scoped>
.carousel-img {
    height: 300px;
    object-fit: cover;
}
</style>
