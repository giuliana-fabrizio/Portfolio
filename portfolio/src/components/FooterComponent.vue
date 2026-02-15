<template>
    <footer>
        <div id="contact" class="container social">
            <div class="text-center">
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

            <div class="text-center mt-1">
                <p class="copyright">
                    &copy; 2024 - {{ name }}. {{ rights }}.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import variables from '../variables_fr.js';
import variables_en from '../variables_en.js';

export default {
    name: "FooterComponent",

    data: () => ({
        name: "",
        mail: "",
        github: "",
        linkedin: "",
        rights: "",
    }),

    created() {
        this.name = variables.name;
        this.mail = variables.mail;
        this.github = variables.github;
        this.linkedin = variables.linkedin;
        this.updateContent();
    },

    computed: {
        language() {
            return this.$store.getters.getLanguage;
        }
    },

    watch: {
        language() {
            this.updateContent();
        }
    },

    methods: {
        updateContent() {
            const isFrench = this.language === 'french';
            this.rights = isFrench ? variables.rights : variables_en.rights;
        }
    }
}
</script>

<style scoped>
footer {
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    width: 100%;
    z-index: 1;
}

.social {
    padding: 15px 0px 10px 0px;
    text-align: center;
}

.social a {
    padding-right: 12px;
}

.copyright {
    color: #74808a;
    margin: 0;
    text-align: center;
}
</style>
