import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllProjectsView from '../views/AllProjectsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/all_projects',
    name: 'projects',
    component: AllProjectsView
  }
]

const router = new VueRouter({
  routes
})

export default router
