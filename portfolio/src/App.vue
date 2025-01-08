<template>
<div id="app" class="font-monospace">
    <div>
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
