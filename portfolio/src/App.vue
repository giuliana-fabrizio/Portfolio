<template>
    <div id="app" class="font-monospace">
        <NavBarComponent />

        <div class="flex-container">
            <main>
                <router-view />
            </main>

            <FooterComponent />
        </div>
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
