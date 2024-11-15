<template>
<div id="app" class="font-monospace">
    <div class="barre_menu">
        <NavBarComponent />
    </div>

    <router-view />

    <footer class="mt-auto">
        <FooterComponent />
    </footer>
</div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
    components: {
        NavBarComponent,
        FooterComponent
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
