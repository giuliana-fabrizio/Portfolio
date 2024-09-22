<template>
    <div>
        <main id="filter_projects_main" class="container">
            <div class="position-fixed" style="top: 7em; z-index: 1050;">
                <button class="btn btn-primary" @click="wantFilter = true">
                    {{ filterLabel }}
                    <i :class="['bi', 'bi-filter']"></i>
                </button>
            </div>

            <Modal v-model="wantFilter" :title="filterLabel" :modalStyle="modalStyle" class="p-3">
                <Multiselect
                    v-model="categories_values"
                    :options="Object.values(categories).map(categorie => categorie.name)"
                    :multiple="true"
                    :max-height="280"
                    selectLabel=""
                    :placeholder="categoriesLabel"
                    open-direction="bottom"
                    class="mb-3" />

                <Multiselect
                    v-model="technos_values"
                    :options="Object.values(technos).map(techno => techno.name)"
                    :multiple="true"
                    :max-height="280"
                    selectLabel=""
                    :placeholder="technosLabel"
                    open-direction="bottom"
                    class="mb-3" />

                <div class="d-flex justify-content-end">
                    <button class="btn btn-success me-1" @click="applyFilters()">
                        {{ confirmFilters }}
                        <i :class="['bi', 'bi-check2-circle']"></i>
                    </button>
                    <button class="btn btn-danger ms-1" @click="cancelFilters()">
                        {{ resetFilters }}
                        <i :class="['bi', 'bi-x-circle']"></i>
                    </button>
                </div>
            </Modal>
        </main>
    </div>
</template>

<script>
import router from '../router/index.js';
import Multiselect from 'vue-multiselect';
import VueModal from '@kouts/vue-modal';
import '@kouts/vue-modal/dist/vue-modal.css';

import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

export default {
    name: 'FilterProjectsComponent',

    components: {
        Multiselect,
        'Modal': VueModal
    },

    data: () => ({
        wantFilter: false,

        filterLabel: "",
        categoriesLabel: "",
        technosLabel: "",
        confirmFilters: "",
        resetFilters : "",

        categories: {},
        categories_values: [],

        technos: {},
        technos_values: [],

        modalStyle: {
            borderRadius: '5px',
            padding: '10px',
        }
    }),

    props: {
        categories_props: [],
        technos_props: []
    },

    created() {
        const language = this.$store.getters.getLanguage;
        const isFrench = language === 'french';

        this.filterLabel = isFrench ? variables_fr.filterLabel : variables_en.filterLabel;
        this.categoriesLabel = isFrench ? variables_fr.categoriesLabel : variables_en.categoriesLabel;
        this.technosLabel = isFrench ? variables_fr.technosLabel : variables_en.technosLabel;
        this.confirmFilters = isFrench ? variables_fr.confirmFilters : variables_en.confirmFilters;
        this.resetFilters = isFrench ? variables_fr.resetFilters : variables_en.resetFilters;

        this.categories = isFrench ? variables_fr.categories : variables_en.categories;
        this.technos = isFrench ? variables_fr.technos : variables_en.technos;

        this.categories_values = this.categories_props;
        this.technos_values = this.technos_props;
    },

    methods: {
        getQuery() {
            let query = {};
            if (this.categories_values.length > 0) {
                query.categories = JSON.stringify(this.categories_values);
            }
            if (this.technos_values.length > 0) {
                query.technologies = JSON.stringify(this.technos_values);
            }
            return query;
        },
        applyFilters() {
            const query = this.getQuery();
            if (JSON.stringify(this.$route.query) !== JSON.stringify(query)) {
                router.push({ path: this.$route.path, query: query });
            }
            this.$emit('categories_props', this.categories_values);
            this.$emit('technos_props', this.technos_values);
            this.wantFilter = false;
        },
        cancelFilters() {
            this.categories_values = [];
            this.technos_values = [];
            this.applyFilters();
        }
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>