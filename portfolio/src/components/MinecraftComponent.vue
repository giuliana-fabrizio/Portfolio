<template>
    <div id="skin_container" class="mx-auto"></div>
</template>

<script>
import { SkinViewer, WalkingAnimation } from 'skinview3d';

export default {
    name: 'MinecraftComponent',

    data: () => ({
        skinViewer: null,
        windowWidth: window.innerWidth
    }),

    mounted() {
        const uuid = "836575ac-d101-4f4c-8ad4-ea7dc22bbfa8";
        const skin = `https://api.mineatar.io/skin/${uuid}`;

        this.skinViewer = new SkinViewer({
            canvas: document.createElement("canvas"),
            width: this.windowWidth >= 576 ? 350 : 295,
            height: 320.8,
            skin: skin,
        });

        document.getElementById("skin_container").appendChild(this.skinViewer.canvas);
        this.skinViewer.animation = new WalkingAnimation();
        this.skinViewer.animation.speed = 0.5;
        this.skinViewer.controls.enableRotation = false;
        this.skinViewer.controls.enableZoom = false;
    }
}
</script>

<style scoped>
#skin_container {
    max-width: min-content;
}
</style>
