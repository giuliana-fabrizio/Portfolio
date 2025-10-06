import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        language: JSON.parse(localStorage.getItem('language')) || "french",
        id_project: JSON.parse(localStorage.getItem('id_project')) || null
    },
    getters: {
        getLanguage: state => state.language,
        getIdProject: state => state.id_project
    },
    mutations: {
        setLanguage: function (state, language) {
            state.language = language;
            localStorage.setItem('language', JSON.stringify(language));
        },
        setIdProject: function (state, id_project) {
            state.id_project = id_project;
            localStorage.setItem('id_project', JSON.stringify(id_project));
        }
    }
});
