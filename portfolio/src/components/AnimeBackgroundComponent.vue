<template>
    <div id="background">
        <canvas id="canva"></canvas>
    </div>
</template>

<script>
export default {
    name: 'AnimeHomeBackground',

    data: () => ({
        canvas: null,
        ctx: null,
        dpr: 1,
        nodes: [],
        node_count: 200,
    }),

    mounted() {
        this.canvas = document.getElementById("canva");
        this.ctx = this.canvas.getContext("2d");

        this.init();
        this.animate = this.animate.bind(this);
        this.animate();

        window.addEventListener("resize", () => {
            this.init();
        });
    },

    methods: {
        init() {
            this.dpr = window.devicePixelRatio || 1;

            const fullHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                window.innerHeight
            );

            this.canvas.width = window.innerWidth * this.dpr;
            this.canvas.height = fullHeight * this.dpr;

            this.ctx.scale(this.dpr, this.dpr);

            this.initNodes();
        },

        initNodes() {
            this.nodes.length = 0;
            for (let i = 0; i < this.node_count; i++) {
                this.nodes.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: (Math.random() - 0.5) * 0.6,
                    size: Math.random() * 2 + 1,
                });
            }
        },

        connectNodes() {
            const limit = 200;
            for (let i = 0; i < this.nodes.length; i++) {
                for (let j = i + 1; j < this.nodes.length; j++) {
                    const dx = this.nodes[i].x - this.nodes[j].x;
                    const dy = this.nodes[i].y - this.nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < limit) {
                        this.ctx.beginPath();
                        this.ctx.strokeStyle = `rgba(123, 124, 124, ${1 - dist / 140})`;
                        this.ctx.lineWidth = 1;
                        this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
                        this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
                        this.ctx.stroke();
                    }
                }
            }
        },

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.nodes.forEach(n => {
                // Update
                n.x += n.vx;
                n.y += n.vy;

                if (n.x < 0 || n.x > window.innerWidth) n.vx *= -1;
                if (n.y < 0 || n.y > this.canvas.height) n.vy *= -1;

                // Draw
                this.ctx.beginPath();
                this.ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
                this.ctx.fillStyle = "rgba(123, 124, 124, 0.9)";
                this.ctx.shadowBlur = 12;
                this.ctx.shadowColor = "#00ffff";
                this.ctx.fill();
                this.ctx.shadowBlur = 0;
            });

            this.connectNodes();
            requestAnimationFrame(this.animate);
        }
    }
};
</script>

<style scoped>
#background {
    margin: 0;
    overflow: hidden;
}

canvas {
    background: transparent;
    height: 100%;
    min-height: 65vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
</style>
