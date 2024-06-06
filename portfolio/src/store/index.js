import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        language: JSON.parse(localStorage.getItem('language')) || "french",
        projects: JSON.parse(localStorage.getItem('projects')) || null,
        project: JSON.parse(localStorage.getItem('project')) || null
    },
    getters: {
        getLanguage: state => state.language,
        getProjects: state => state.projects,
        getProject: state => state.project
    },
    mutations: {
        setLanguage: function (state, language) {
            state.language = language;
            localStorage.setItem('language', JSON.stringify(language));
        },
        setProjects: function (state, projects) {
            state.projects = projects;
            localStorage.setItem('projects', JSON.stringify(projects));
        },
        setProject: function (state, project) {
            state.project = project;
            localStorage.setItem('project', JSON.stringify(project));
        }
    }
});
