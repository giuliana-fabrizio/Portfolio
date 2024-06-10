<template>
    <a class="btn btn-primary cta-button w-30" :href="href" role="button">
        {{ text }}
        <i :class="['bi', icon]"></i>
    </a>
</template>

<script>
export default {
    name: 'AnimeTitleComponent',

    props: {
        href: String,
        icon: String,
        text: String,
    },
};
</script>

<style scoped>
.cta-button {
    animation: shadow-pulse 2s infinite;
}

@keyframes shadow-pulse {
    0% {
        box-shadow: 0 0 0 0 #0d6dfdb6;
    }

    70% {
        box-shadow: 0 0 0 15px rgba(131, 14, 14, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(131, 14, 14, 0);
    }
}
</style>
