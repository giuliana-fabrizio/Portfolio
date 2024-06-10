<template>
<div id="app" class="font-monospace">
    <div class="barre_menu">
        <NavBarComponent />
    </div>

    <router-view />

    <footer class="mt-auto">
        <section id="contact" class="container social">
            <div class="row">
                <div class="col-12 text-center">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a :href="mail" target="_blank">
                                <i class="bi bi-envelope-fill fs-4"></i>
                            </a>
                        </li>

                        <li class="list-inline-item">
                            <a :href="github" target="_blank">
                                <i class="bi bi-github fs-4"></i>
                            </a>
                        </li>

                        <li class="list-inline-item">
                            <a :href="linkedin" target="_blank">
                                <i class="bi bi-linkedin fs-4"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row">
                <div class="col-12 text-center pt-2">
                    <p class="copyright">
                        &copy; 2024 - {{ name }}
                    </p>
                </div>
            </div>
        </section>
    </footer>
</div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';
import variables from './variables_fr.js';

export default {
    components: {
        NavBarComponent
    },

    data: () => ({
        name: "",
        mail: "",
        github: "",
        linkedin: "",
    }),

    created() {
        this.name = variables.name;
        this.mail = variables.mail;
        this.github = variables.github;
        this.linkedin = variables.linkedin;
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
