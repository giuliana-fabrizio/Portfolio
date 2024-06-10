<template>
    <div id="appear">
        {{ text }}
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    name: 'AnimeTitleComponent',

    props: {
        text: String,
        duration: Number || 1000
    },

    mounted() {
        anime({
            targets: '#appear',
            opacity: [0, 1],
            scale: [0.5, 1],
            duration: this.duration,
            easing: 'easeInOutQuad'
        });
    }
};
</script>
