import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DegreesView from '../views/DegreesView.vue';
import ExperiencesView from '../views/ExperiencesView.vue';
import AllProjectsView from '../views/AllProjectsView.vue';
import DetailsView from '../views/DetailsView.vue';
import InterestsView from '@/views/InterestsView.vue';
import NotFoundView from '../views/NotFoundView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/academic_training',
    name: 'academic_training',
    component: DegreesView
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: ExperiencesView
  },
  {
    path: '/all_projects',
    name: 'all_projects',
    component: AllProjectsView
  },
  {
    path: '/details',
    name: 'details',
    component: DetailsView,
  },
  {
    path: '/interests',
    name: 'interests',
    component: InterestsView
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
