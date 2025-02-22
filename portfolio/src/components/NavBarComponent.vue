<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <router-link to="/not_found" class="d-none d-lg-block">
                <img src="images/logo.png" style="width: 27px;">
            </router-link>
            <a
                class="navbar-brand navbar-toggler border-0"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav">
                <img src="images/logo.png" style="width: 27px;">
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/">{{ home_btn }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/academic_training">{{ academic_training_btn }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/experiences">{{ experiences_btn }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/all_projects">{{ projects_btn }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/interests">{{ interests_btn }}</router-link>
                    </li>
                    <!-- <li v-if="canChangeLanguage" :class="['nav-item', language === 'french' && 'd-none']">
                        <button class="btn p-0" @click="changeLanguage('french')">
                            <img src="images/france.png"  style="width: 27px;">
                        </button>
                    </li>
                    <li v-if="canChangeLanguage" :class="['nav-item', language === 'english' && 'd-none']">
                        <button class="btn p-0" @click="changeLanguage('english')">
                            <img src="images/royaume-uni.png" style="width: 27px;">
                        </button>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

export default {
    name: "NavBarComponent",

    data: () => ({
        home_btn: "",
        academic_training_btn: "",
        experiences_btn: "",
        projects_btn: "",
        interests_btn: "",
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
            this.academic_training_btn = isFrench ? variables_fr.academic_training_btn : variables_en.academic_training_btn;
            this.experiences_btn = isFrench ? variables_fr.experiences_btn : variables_en.experiences_btn;
            this.projects_btn = isFrench ? variables_fr.projects_btn : variables_en.projects_btn;
            this.interests_btn = isFrench ? variables_fr.interests_btn : variables_en.interests_btn;
        },
        changeLanguage(lang) {
            this.$store.commit('setLanguage', lang);
        }
    }
}
</script>
