<template>
<div id="background">
    <canvas id="c"></canvas>
</div>
</template>

<script>
export default {
    name: 'AnimeBackground',

    mounted() {
        window.requestAnimationFrame = (function () {
            return window.requestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 15); // Diminuer la fréquence de mise à jour pour ralentir l'animation
                };
        })();

        function Vector(x, y) {
            this.x = x || 0;
            this.y = y || 0;
        }

        Vector.add = function (a, b) {
            return new Vector(a.x + b.x, a.y + b.y);
        };

        Vector.sub = function (a, b) {
            return new Vector(a.x - b.x, a.y - b.y);
        };

        Vector.scale = function (v, s) {
            return v.clone().scale(s);
        };

        Vector.random = function () {
            return new Vector(
                Math.random() * 2 - 1,
                Math.random() * 2 - 1
            );
        };

        Vector.prototype = {
            set: function (x, y) {
                if (typeof x === 'object') {
                    y = x.y;
                    x = x.x;
                }
                this.x = x || 0;
                this.y = y || 0;
                return this;
            },

            add: function (v) {
                this.x += v.x;
                this.y += v.y;
                return this;
            },

            sub: function (v) {
                this.x -= v.x;
                this.y -= v.y;
                return this;
            },

            scale: function (s) {
                this.x *= s;
                this.y *= s;
                return this;
            },

            length: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },

            lengthSq: function () {
                return this.x * this.x + this.y * this.y;
            },

            normalize: function () {
                const m = Math.sqrt(this.x * this.x + this.y * this.y);
                if (m) {
                    this.x /= m;
                    this.y /= m;
                }
                return this;
            },

            angle: function () {
                return Math.atan2(this.y, this.x);
            },

            angleTo: function (v) {
                const dx = v.x - this.x,
                    dy = v.y - this.y;
                return Math.atan2(dy, dx);
            },

            distanceTo: function (v) {
                const dx = v.x - this.x,
                    dy = v.y - this.y;
                return Math.sqrt(dx * dx + dy * dy);
            },

            distanceToSq: function (v) {
                const dx = v.x - this.x,
                    dy = v.y - this.y;
                return dx * dx + dy * dy;
            },

            lerp: function (v, t) {
                this.x += (v.x - this.x) * t;
                this.y += (v.y - this.y) * t;
                return this;
            },

            clone: function () {
                return new Vector(this.x, this.y);
            },

            toString: function () {
                return '(x:' + this.x + ', y:' + this.y + ')';
            }
        };

        function Particle(x, y, radius) {
            Vector.call(this, x, y);
            this.radius = radius;
            this.color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`; // Couleur aléatoire

            this._latest = new Vector();
            this._speed = new Vector();
        }

        Particle.prototype = (function (o) {
            const s = new Vector(0, 0);
            for (const p in o) s[p] = o[p];
            return s;
        })({
            addSpeed: function (d) {
                this._speed.add(d);
            },

            update: function () {
                if (this._speed.length() > 3) this._speed.normalize().scale(3); // Réduire la vitesse maximale

                this._latest.set(this);
                this.add(this._speed);
            }
        });

        (function () {
            const PARTICLE_RADIUS = 1, // Augmenter le rayon des particules pour une meilleure visibilité
                canvas = document.getElementById('c'),
                bufferCvs = document.createElement('canvas'),
                particles = [];

            let context, bufferCtx, screenWidth, screenHeight;

            function resize() {
                screenWidth = canvas.width = window.innerWidth;
                screenHeight = canvas.height = document.getElementById('home_header').offsetHeight;
                bufferCvs.width = screenWidth;
                bufferCvs.height = screenHeight;
                context = canvas.getContext('2d');
                bufferCtx = bufferCvs.getContext('2d');
            }

            function addParticle(num) {
                for (let i = 0; i < num; i++) {
                    const p = new Particle(
                        Math.floor(Math.random() * screenWidth - PARTICLE_RADIUS * 2) + 1 + PARTICLE_RADIUS,
                        Math.floor(Math.random() * screenHeight - PARTICLE_RADIUS * 2) + 1 + PARTICLE_RADIUS,
                        PARTICLE_RADIUS
                    );
                    p.addSpeed(Vector.random().scale(0.2)); // Réduire la vitesse initiale des particules
                    particles.push(p);
                }
            }

            window.addEventListener('resize', resize, false);
            resize();

            addParticle(80); // Réduire le nombre de particules initiales

            const loop = function () {
                context.clearRect(0, 0, screenWidth, screenHeight);

                bufferCtx.save();
                bufferCtx.globalCompositeOperation = 'destination-out';
                bufferCtx.globalAlpha = 1;
                bufferCtx.fillRect(0, 0, screenWidth, screenHeight);
                bufferCtx.restore();

                bufferCtx.save();
                bufferCtx.lineCap = bufferCtx.lineJoin = 'round';
                bufferCtx.lineWidth = PARTICLE_RADIUS * 2;
                bufferCtx.beginPath();
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    p.update();
                    bufferCtx.moveTo(p.x, p.y);
                    bufferCtx.lineTo(p._latest.x, p._latest.y);
                }
                bufferCtx.stroke();
                bufferCtx.beginPath();
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    bufferCtx.moveTo(p.x, p.y);
                    bufferCtx.fillStyle = p.color; // Utiliser la couleur aléatoire de la particule
                    bufferCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
                }
                bufferCtx.fill();
                bufferCtx.restore();

                context.drawImage(bufferCvs, 0, 0);

                requestAnimationFrame(loop);
            };
            loop();
        })();
    }
};
</script>

<style>
    #background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
    }
</style>
