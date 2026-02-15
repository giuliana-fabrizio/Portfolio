<template>
    <nav class="navbar bg-navbar m-0 p-0">
        <router-link to="/" class="fw-bold text-white text-decoration-none ms-3">
            <img src="images/logo.png" class="img-navbar">
        </router-link>

        <div class="d-flex align-items-center">
            <div id="id_navbar" class="position-relative">
                <div class="horizontal_selector position-absolute" ref="horizontal_selector">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
                <ul class="m-0">
                    <li v-for="item in items" :key="item.to"
                        :class="{ active: $route.path === item.to || item.to === '/all_projects' && path === '/details' }"
                        ref="nav_items">
                        <router-link :to="item.to"
                            class="d-block d-flex text-decoration-none text-white position-relative">
                            <i class="me-md-2" :class="item.icon"></i>
                            <span class="d-none d-md-block">{{ item.label }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="dropdown">
                <button class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img :src="isFrench ? 'images/france.png' : 'images/english.png'" class="img-navbar">
                </button>
                <ul class="dropdown-menu">
                    <li @click="changeLanguage('french')" class="dropdown-item"><img src="images/france.png"
                            class="img-navbar"></li>
                    <li @click="changeLanguage('english')" class="dropdown-item"><img src="images/english.png"
                            class="img-navbar"></li>
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

    data() {
        return {
            isFrench: null,
            home_btn: "",
            academic_training_btn: "",
            experiences_btn: "",
            projects_btn: "",
            interests_btn: "",

            items: []
        }
    },

    created() {
        this.updateLanguage();
        this.updateItems();
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
            this.updateItems();
            setTimeout(() => { this.moveSelector(); }, 300);
        },

        async path() {
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
            this.isFrench = this.language === 'french';
            this.home_btn = this.isFrench ? variables_fr.home_btn : variables_en.home_btn;
            this.academic_training_btn = this.isFrench ? variables_fr.academic_training_btn : variables_en.academic_training_btn;
            this.experiences_btn = this.isFrench ? variables_fr.experiences_btn : variables_en.experiences_btn;
            this.projects_btn = this.isFrench ? variables_fr.projects_btn : variables_en.projects_btn;
            this.interests_btn = this.isFrench ? variables_fr.interests_btn : variables_en.interests_btn;
        }
    }
}
</script>

<style scoped>
.navbar {
    z-index: 1;
}

.img-navbar {
    width: 27px;
}

.bg-navbar {
    background-color: #00244C;
}

#id_navbar {
    overflow: hidden;
}

#id_navbar li {
    list-style-type: none;
    float: left;
}

#id_navbar ul li a {
    font-size: 15px;
    padding: 20px 20px;
    transition-duration: 0.6s;
}

#id_navbar>ul>li.active>a {
    color: #00244C !important;
    background-color: transparent;
    transition: all 0.7s;
}

.horizontal_selector {
    top: 18px;
    left: 0px;
    transition-duration: 0.6s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-top: 12px;
}

.horizontal_selector .right,
.horizontal_selector .left {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #fff;
    bottom: 10px;
}

.horizontal_selector .right {
    right: -25px;
}

.horizontal_selector .left {
    left: -25px;
}

.horizontal_selector .right:before,
.horizontal_selector .left:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #00244C;
}

.horizontal_selector .right:before {
    bottom: 0;
    right: -25px;
}

.horizontal_selector .left:before {
    bottom: 0;
    left: -25px;
}

.dropdown-menu {
    padding: 0 !important;
    left: -20% !important;
    min-width: 0rem !important;
}
</style>
