<template>
    <div>
        <button v-show="isVisible" @click="scrollToTop" class="scroll-to-top-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
            </svg>
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

<style>
    .scroll-to-top-button {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: rgba(0, 0, 0, 0);
        color: #007BFF;
        border: none;
        border-radius: 5px;
    }
</style>
