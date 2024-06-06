import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        projects: JSON.parse(localStorage.getItem('projects')) || null,
        project: JSON.parse(localStorage.getItem('project')) || null
    },
    getters: {
        getProjects: state => state.projects,
        getProject: state => state.project
    },
    mutations: {
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
