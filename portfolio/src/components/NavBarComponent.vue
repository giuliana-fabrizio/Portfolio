<template>
    <nav class="container d-flex justify-content-between align-items-center py-3">
        <img src="images/logo.png" style="width: 27px;">

        <ul class="d-flex">
            <li>
                <router-link to="/">{{ home_btn }}</router-link>
            </li>
            <li>
                <router-link to="/academic_training">{{ academic_training }}</router-link>
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
        this.canChangeLanguage = this.$route.path === '/';
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
            this.academic_training = isFrench ? variables_fr.academic_training : variables_en.academic_training;
            this.projects_btn = isFrench ? variables_fr.projects_btn : variables_en.projects_btn;
        },
        changeLanguage(lang) {
            this.$store.commit('setLanguage', lang);
        }
    }
}
</script>
