<template>
    <nav class="navbar bg-navbar m-0 p-0">
        <router-link to="/" class="fw-bold text-white text-decoration-none ms-3">
            <img src="images/logo.png" style="width: 27px;">
        </router-link>

        <div id="id_navbar" class="position-relative">
            <div class="horizontal_selector position-absolute" ref="horizontal_selector">
                <div class="left"></div>
                <div class="right"></div>
            </div>
            <ul class="m-0">
                <li v-for="item in items" :key="item.to"
                    :class="{ active: $route.path === item.to || item.to === '/all_projects' && path === '/details' }"
                    ref="nav_items">
                    <router-link :to="item.to" class="d-block d-flex text-decoration-none text-white position-relative">
                        <i class="me-md-2" :class="item.icon"></i>
                        <span class="d-none d-md-block">{{ item.label }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

export default {
    name: "NavBarComponent",

    data() {
        return {
            home_btn: "",
            academic_training_btn: "",
            experiences_btn: "",
            projects_btn: "",
            interests_btn: "",
            canChangeLanguage: true,

            items: []
        }
    },

    created() {
        this.updateLanguage();
        this.updateItems();
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
            this.updateLanguage();
        },

        async path() {
            this.canChangeLanguage = this.$route.path === '/';
            await this.$nextTick();
            this.moveSelector();
        }
    },

    async mounted() {
        await this.$nextTick();
        this.moveSelector();
        window.addEventListener('resize', () => {
            setTimeout(() => { this.moveSelector(); }, 500);
        });
    },

    methods: {
        changeLanguage(lang) {
            this.$store.commit('setLanguage', lang);
        },

        moveSelector() {
            const nav_items = this.$refs.nav_items;

            let activeIndex = this.items.findIndex(item => item.to === this.$route.path || item.to === '/all_projects' && this.$route.path === '/details');
            if (activeIndex === -1) { activeIndex = 0; }

            const elem_active = nav_items[activeIndex];

            if (elem_active) {
                const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = elem_active;
                const selector = this.$refs.horizontal_selector;

                selector.style.top = offsetTop + "px";
                selector.style.left = offsetLeft + "px";
                selector.style.height = offsetHeight + "px";
                selector.style.width = offsetWidth + "px";
            }
        },

        updateItems() {
            this.items = [
                { to: '/', icon: 'bi bi-house', label: this.home_btn },
                { to: '/academic_training', icon: 'bi bi-book', label: this.academic_training_btn },
                { to: '/experiences', icon: 'bi bi-bag', label: this.experiences_btn },
                { to: '/all_projects', icon: 'bi bi-window-sidebar', label: this.projects_btn },
                { to: '/interests', icon: 'bi bi-heart', label: this.interests_btn },
            ];
        },

        updateLanguage() {
            const isFrench = this.language === 'french';
            this.home_btn = isFrench ? variables_fr.home_btn : variables_en.home_btn;
            this.academic_training_btn = isFrench ? variables_fr.academic_training_btn : variables_en.academic_training_btn;
            this.experiences_btn = isFrench ? variables_fr.experiences_btn : variables_en.experiences_btn;
            this.projects_btn = isFrench ? variables_fr.projects_btn : variables_en.projects_btn;
            this.interests_btn = isFrench ? variables_fr.interests_btn : variables_en.interests_btn;
        }
    }
}
</script>
