<template>
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
</template>

<script>
import variables from '../variables_fr.js';

export default {
    name: "FooterComponent",

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
