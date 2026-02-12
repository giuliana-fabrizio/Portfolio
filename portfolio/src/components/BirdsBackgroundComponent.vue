<template>
    <div class="birds-bg">
        <div v-for="(b, i) in birds" :key="b.id" :ref="(el) => setBirdRef(el, i)" class="bird">
            <div class="bird-container">
                <div class="wing wing-left">
                    <div class="wing-left-top"></div>
                </div>
                <div class="wing wing-right">
                    <div class="wing-right-top"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BirdsBackground",

    data() {
        return {
            birds: [],
            birdsNumber: 100,
            birdsRefs: [],
        };
    },

    mounted() {
        this.birds = this.createBirds(this.birdsNumber);

        this.$nextTick(() => {
            this.birdsRefs.forEach((el, i) => {
                const b = this.birds[i];
                if (el && b) {
                    this.animateBird(el, b);
                }
            });
        });
    },

    beforeUnmount() {
        this.birdsRefs = [];
    },

    methods: {
        setBirdRef(el, i) {
            if (el) this.birdsRefs[i] = el;
        },

        randomBounded(min, max) {
            return Math.random() * (max - min) + min;
        },

        createBirds(n) {
            return Array.from({ length: n }, (_, i) => ({
                id: i,
                duration: this.randomBounded(60000, 140000),
                delay: i * 80,
                startY: this.randomBounded(-10, 90),
                endY: this.randomBounded(-10, 90),
                depth: this.randomBounded(-1200, 600),
                scale: this.randomBounded(0.3, 1.2),
                dir: Math.random() < 0.5 ? -1 : 1,
                rotY: this.randomBounded(-45, 45),
                rotX: this.randomBounded(-15, 15),
            }));
        },

        animateBird(el, b) {
            return el.animate(
                [
                    {
                        transform: `
              translate3d(${b.dir * -140}vw, ${b.startY}vh, ${b.depth}px)
              rotateY(${b.rotY}deg)
              rotateX(${b.rotX}deg)
              scale(${b.scale})
            `,
                    },
                    {
                        transform: `
              translate3d(${b.dir * 140}vw, ${b.endY}vh, ${b.depth}px)
              rotateY(${b.rotY}deg)
              rotateX(${b.rotX}deg)
              scale(${b.scale})
            `,
                    },
                ],
                {
                    duration: b.duration,
                    delay: b.delay,
                    iterations: Infinity,
                    easing: "linear",
                }
            );
        },
    },
};

</script>

<style scoped>
.birds-bg {
    position: absolute;
    inset: 0;
    min-height: 100vh;
}

/* ========================================================================================= */
/* ================================================================================= Oiseaux */
/* ========================================================================================= */
.bird {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 40px;
    transform-style: preserve-3d;
}

.bird-container {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translate3d(50px, 30px, -300px);
}

.wing {
    position: absolute;
    inset: 0;
    border-radius: 3px;
    transform-style: preserve-3d;
    transform-origin: center bottom;
}

.wing-left {
    background: linear-gradient(to bottom, #a58dc4 0%, #7979a8 100%);
    transform: rotateX(-30deg);
    animation: wingLeft 1.3s cubic-bezier(0.45, 0, 0.5, 0.95) infinite;
}

.wing-right {
    background: linear-gradient(to bottom, #d9d3e2 0%, #b8a5d1 100%);
    transform: rotateX(-30deg);
    animation: wingRight 1.3s cubic-bezier(0.45, 0, 0.5, 0.95) infinite;
}

.wing-right-top,
.wing-left-top {
    position: absolute;
    top: -20px;
    width: 100%;
    border-right: 25px solid transparent;
    border-left: 25px solid transparent;
    transform-origin: 100% 100%;
}

.wing-right-top {
    border-bottom: 20px solid #b8a5d1;
    transform: rotateX(60deg);
    animation: wingRightTop 1.3s cubic-bezier(0.45, 0, 0.5, 0.95) infinite;
}

.wing-left-top {
    border-bottom: 20px solid #7979a8;
    transform: rotateX(-60deg);
    animation: wingLeftTop 1.3s cubic-bezier(0.45, 0, 0.5, 0.95) infinite;
}


/* ========================================================================================= */
/* ================================================================================= Oiseaux */
/* ========================================================================================= */
@keyframes wingLeft {

    0%,
    100% {
        transform: rotateX(-50deg);
    }

    50% {
        transform: translate3d(0, -20px, 0) rotateX(-130deg);
        background: linear-gradient(to bottom, #d9d3e2 0%, #b8a5d1 100%);
    }
}

@keyframes wingLeftTop {

    0%,
    100% {
        transform: rotateX(-10deg);
    }

    50% {
        transform: rotateX(-40deg);
        border-bottom-color: #b8a5d1;
    }
}

@keyframes wingRight {

    0%,
    100% {
        transform: rotateX(50deg);
    }

    50% {
        transform: translate3d(0, -20px, 0) rotateX(130deg);
        background: linear-gradient(to bottom, #a58dc4 0%, #7979a8 100%);
    }
}

@keyframes wingRightTop {

    0%,
    100% {
        transform: rotateX(10deg);
    }

    50% {
        transform: rotateX(40deg);
        border-bottom-color: #7979a8;
    }
}
</style>
