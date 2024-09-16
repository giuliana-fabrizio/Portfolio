<template>
    <div>
        <main id="filter_projects_main" class="d-flex justify-content-center pb-5">
            <div class="container col-4">
                <p>Filtrer les résultats</p>
                <input type="text" placeholder="Nom" class="form-control mb-3">

                <Multiselect
                    v-model="categories_values"
                    :options="Object.values(categories).map(categorie => categorie.name)"
                    selectLabel=""
                    placeholder="Type de projet"
                    open-direction="bottom"
                    class="mb-3" />

                <Multiselect
                    v-model="technos_values"
                    :options="Object.values(technos).map(techno => techno.name)"
                    selectLabel=""
                    placeholder="Technologies"
                    open-direction="bottom"
                    class="mb-3" />
            </div>
        </main>
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import Multiselect from 'vue-multiselect';

export default {
    name: 'FilterProjectsComponent',

    components: {
        Multiselect
    },

    data: () => ({
        categories: {},
        categories_values: null,

        technos: {},
        technos_values: null
    }),

    created() {
        const language = this.$store.getters.getLanguage;
        const isFrench = language === 'french';

        this.categories = isFrench ? variables_fr.categories : variables_en.categories;
        this.technos = isFrench ? variables_fr.technos : variables_en.technos;
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>