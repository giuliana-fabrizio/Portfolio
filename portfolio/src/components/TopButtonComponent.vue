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

<style scoped>
.scroll-to-top-button {
    position: fixed;
    bottom: 60px;
    right: 30px;
    background-color: rgba(0, 0, 0, 0);
    color: #007BFF;
    border: none;
    border-radius: 5px;
}
</style>
