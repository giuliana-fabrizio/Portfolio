<template>
    <div>
        <main id="filter_projects_main" class="d-flex justify-content-center pb-5">
            <div class="container col-4">
                <p>Filtrer les résultats</p>

                <Multiselect
                    v-model="categories_values"
                    :options="Object.values(categories).map(categorie => categorie.name)"
                    :multiple="true"
                    selectLabel=""
                    placeholder="Type de projet"
                    open-direction="bottom"
                    class="mb-3" />

                <Multiselect
                    v-model="technos_values"
                    :options="Object.values(technos).map(techno => techno.name)"
                    :multiple="true"
                    selectLabel=""
                    placeholder="Technologies"
                    open-direction="bottom"
                    class="mb-3" />
            </div>
        </main>
    </div>
</template>

<script>
import router from '../router/index.js';
import Multiselect from 'vue-multiselect';

import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

export default {
    name: 'FilterProjectsComponent',

    components: {
        Multiselect
    },

    data: () => ({
        categories: {},
        categories_values: [],

        technos: {},
        technos_values: []
    }),

    props: {
        categories_props: [],
        technos_props: []
    },

    created() {
        const language = this.$store.getters.getLanguage;
        const isFrench = language === 'french';

        this.categories = isFrench ? variables_fr.categories : variables_en.categories;
        this.technos = isFrench ? variables_fr.technos : variables_en.technos;

        this.categories_values = this.$route.query.categories ?
            JSON.parse(this.$route.query.categories) :
            [];
        this.technos_values = this.$route.query.technologies ?
            JSON.parse(this.$route.query.technologies) :
            [];
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
        }
    },

    watch: {
        categories_values() {
            const query = this.getQuery();
            if (JSON.stringify(this.$route.query) !== JSON.stringify(query)) {
                router.push({ path: this.$route.path, query: query });
            }
            this.$emit('categories_props', this.categories_values);
        },

        technos_values() {
            const query = this.getQuery();
            if (JSON.stringify(this.$route.query) !== JSON.stringify(query)) {
                router.push({ path: this.$route.path, query: query });
            }
            this.$emit('technos_props', this.technos_values);
        }
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>