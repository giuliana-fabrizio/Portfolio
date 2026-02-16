<template>
    <div ref="container" class="mx-auto sphere-container"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import variables_fr from "../variables_fr.js";

export default {
    name: "TechSphereComponent",

    data() {
        return {
            animationId: null,
        };
    },

    mounted() {
        this.initScene();
        this.createTechLabels();
        this.animate();
        window.addEventListener("resize", this.handleResize);
    },

    beforeUnmount() {
        cancelAnimationFrame(this.animationId);
        this.renderer.dispose();
    },

    methods: {
        animate() {
            this.animationId = requestAnimationFrame(() => this.animate());
            if (this.controls) this.controls.update();

            this.techGroup.rotation.y += 0.002;
            this.techGroup.rotation.x += 0.001;

            this.renderer.render(this.scene, this.camera);
        },

        initScene() {
            const container = this.$refs.container;
            this.scene = new THREE.Scene();

            // Camera
            this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            this.updateCameraPosition();

            // Renderer
            this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(this.renderer.domElement);

            // Group
            this.techGroup = new THREE.Group();
            this.scene.add(this.techGroup);

            // Controls
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.enablePan = false;
            this.controls.enableZoom = false;
            this.controls.autoRotate = true;
            this.controls.autoRotateSpeed = 1.2;
        },

        handleResize() {
            const container = this.$refs.container;
            if (!container) return;

            const width = container.clientWidth;
            const height = container.clientHeight;

            this.camera.aspect = width / height;
            this.updateCameraPosition();
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(width, height);
        },

        updateCameraPosition() {
            const width = window.innerWidth;
            this.camera.position.z = width < 600 ? 8 : 5;
        },

        createTechLabels() {
            const radius = 2.8;
            const logos = Object.values(variables_fr.technos).map(techno => techno.logo);
            const textureLoader = new THREE.TextureLoader();

            logos.forEach((logo, i) => {
                const texture = textureLoader.load(logo);

                const material = new THREE.SpriteMaterial({
                    map: texture,
                    transparent: true,
                });

                const sprite = new THREE.Sprite(material);

                // Position
                const phi = Math.acos(-1 + (2 * i) / logos.length);
                const theta = Math.sqrt(logos.length * Math.PI) * phi;

                sprite.position.set(
                    radius * Math.cos(theta) * Math.sin(phi),
                    radius * Math.sin(theta) * Math.sin(phi),
                    radius * Math.cos(phi)
                );

                // Size
                sprite.scale.set(0.5, 0.5, 1);

                this.techGroup.add(sprite);
            });
        },
    },
};
</script>

<style scoped>
.sphere-container {
    background-color: var(--white);
    border-radius: 50%;
    position: relative;
    height: 50vh;
}

@media screen and (min-width: 500px) {
    .sphere-container {
        aspect-ratio: 1/1;
    }
}
</style>
