<template>
    <div ref="canvasContainer"></div>
</template>

<script>
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export default {
    name: "ModellingComponent",
    props: {
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            canvasContainer: null,
            scene: null,
            camera: null,
            renderer: null,
            controls: null
        };
    },

    mounted() {
        this.initScene();
        this.loadModel();
        this.animate();
        window.addEventListener("resize", this.handleResize);
    },

    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize);
        if (this.controls) this.controls.dispose();
        if (this.renderer) this.renderer.dispose();
        if (this.scene) this.scene.clear();
    },

    methods: {
        initScene() {
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 2000);
            this.camera.position.set(0, 65, 30);

            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(this.width, this.height);
            this.renderer.setClearColor(0xffffff, 1);
            this.renderer.shadowMap.enabled = true;

            this.canvasContainer = this.$refs.canvasContainer;
            this.canvasContainer.appendChild(this.renderer.domElement);

            // Camera control
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.minDistance = 30;
            this.controls.maxDistance = 90;
            this.controls.maxPolarAngle = Math.PI / 2;

            // Light
            const positivelLight = new THREE.DirectionalLight(0xffffff, 2);
            positivelLight.position.set(1, 1, 1);
            this.scene.add(positivelLight);

            const negativeLight = new THREE.DirectionalLight(0xffffff, 1.5);
            negativeLight.position.set(-1, 1, -1);
            this.scene.add(negativeLight);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
            this.scene.add(ambientLight);
        },

        loadModel() {
            const mtlLoader = new MTLLoader();
            mtlLoader.load(
                "https://raw.githubusercontent.com/giuliana-fabrizio/Portfolio/main/portfolio/public/files/3d_modelling/Studio_Odalys.mtl",
                (materials) => {
                    materials.preload();
                    const loader = new OBJLoader();
                    loader.setMaterials(materials);
                    loader.load(
                        "https://raw.githubusercontent.com/giuliana-fabrizio/Portfolio/main/portfolio/public/files/3d_modelling/StudioOdalys.obj",
                        (object) => {
                            object.traverse((child) => {
                                if (child.isMesh) {
                                    child.geometry.computeBoundingBox();
                                }
                            });

                            const box = new THREE.Box3().setFromObject(object);
                            const center = box.getCenter(new THREE.Vector3());
                            const size = box.getSize(new THREE.Vector3());

                            const group = new THREE.Group();
                            group.add(object);
                            object.position.sub(center);

                            const maxDim = Math.max(size.x, size.y, size.z);
                            const scale = 100 / maxDim;
                            group.scale.multiplyScalar(scale);

                            this.scene.add(group);
                            this.controls.target.set(0, 0, 0);
                            this.controls.update();
                            this.renderer.render(this.scene, this.camera);
                        },
                        () => {},
                        (error) => console.error("Error OBJ :", error)
                    );
                },
                () => {},
                (error) => console.error("Error MTL :", error)
            );
        },

        animate() {
            requestAnimationFrame(this.animate);
            if (this.controls) this.controls.update();
            if (this.renderer && this.scene && this.camera) {
                this.renderer.render(this.scene, this.camera);
            }
        },

        handleResize() {
            if (this.camera && this.renderer) {
                this.camera.aspect = this.width / this.height;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(this.width, this.height);
            }
        }
    }
};
</script>
