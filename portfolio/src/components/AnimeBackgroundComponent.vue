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
        nodes: [],
        node_count: 80,
    }),

    mounted() {
        this.canvas = document.getElementById("canva");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.init();
        this.animate = this.animate.bind(this);
        this.animate();

        window.addEventListener("resize", () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.init();
        });
    },

    methods: {
        init() {
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
            for (let i = 0; i < this.nodes.length; i++) {
                for (let j = i + 1; j < this.nodes.length; j++) {
                    const dx = this.nodes[i].x - this.nodes[j].x;
                    const dy = this.nodes[i].y - this.nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 140) {
                        this.ctx.beginPath();
                        this.ctx.strokeStyle = `rgba(123,124,124,${1 - dist / 140})`;
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

                if (n.x < 0 || n.x > this.canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > this.canvas.height) n.vy *= -1;

                // Draw
                this.ctx.beginPath();
                this.ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
                this.ctx.fillStyle = "rgba(123,124,124,0.9)";
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
body {
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
