<template>
    <nav class="container d-flex justify-content-between align-items-center py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#333" class="bi bi-grid logo" viewBox="0 0 16 16">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
            </svg>

            <ul class="d-flex">
                <li>
                    <router-link to="/">{{ home_btn }}</router-link>
                </li>
                <li>
                    <router-link to="/all_projects">{{ projects_btn }}</router-link>
                </li>
                <li v-if="canChangeLanguage" :class="language === 'french' && 'd-none'">
                    <button class="btn p-0" @click="changeLanguage('french')">
                        <img src="images/france.png"  style="width: 27px;">
                    </button>
                </li>
                <li v-if="canChangeLanguage" :class="language === 'english' && 'd-none'">
                    <button class="btn p-0" @click="changeLanguage('english')">
                        <img src="images/royaume-uni.png" style="width: 27px;">
                    </button>
                </li>
            </ul>
        </nav>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

export default {
    name: "NavBarComponent",

    data: () => ({
        home_btn: "",
        projects_btn: "",
        canChangeLanguage: true
    }),

    created() {
        this.updateNavBar();
    },

    computed: {
        language() {
            return this.$store.getters.getLanguage;
        },
        path() {
            return this.$route.path;
        }
    },

    watch: {
        language() {
            this.updateNavBar();
        },
        path() {
            this.canChangeLanguage = this.$route.path === '/';
        }
    },

    methods: {
        updateNavBar() {
            const isFrench = this.language === 'french';

            this.home_btn = isFrench ? variables_fr.home_btn : variables_en.home_btn;
            this.projects_btn = isFrench ? variables_fr.projects_btn : variables_en.projects_btn;
        },
        changeLanguage(lang) {
            this.$store.commit('setLanguage', lang);
        }
    }
}
</script>
