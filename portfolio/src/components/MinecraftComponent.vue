<template>
    <div class="container">
        <div id="skin_container"></div>
    </div>
</template>

<script>
import { SkinViewer, WalkingAnimation } from 'skinview3d';

export default {
    name: 'MinecraftComponent',

    data: () => ({
        skinViewer: null
    }),

    mounted() {
        const uuid = "836575ac-d101-4f4c-8ad4-ea7dc22bbfa8";
        const skin = `https://crafatar.com/skins/${uuid}`;

        this.skinViewer = new SkinViewer({
            canvas: document.createElement("canvas"),
            width: 350,
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
