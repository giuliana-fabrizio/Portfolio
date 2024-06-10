<template>
    <div>
        <button v-show="isVisible" @click="scrollToTop" class="scroll-to-top-button">
            <i class="bi bi-arrow-up-circle-fill fs-1"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: "TopButtonComponent",

    data() {
        return {
            isVisible: false
        };
    },

    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        handleScroll() {
            this.isVisible = window.scrollY > 50;
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
}
</script>
