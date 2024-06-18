import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AllProjectsView from '../views/AllProjectsView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import DetailsView from '../views/DetailsView.vue';
import NotFoundView from '../views/NotFoundView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/all_projects',
    name: 'all_projects',
    component: AllProjectsView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    props: route => ({ title: route.params.title, projects: route.params.projects })
  },
  {
    path: '/details',
    name: 'details',
    component: DetailsView,
  },
  {
    path: '*',
    name: 'not_found',
    component: NotFoundView,
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
