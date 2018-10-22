import { currentDeck } from './store/currentDeck/index';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Exercise from './views/Exercise.vue';
import CurrentDeck from './views/CurrentDeck.vue';

Vue.use(Router);

const router: Router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/deck/:uid',
      name: 'deck',
      component: CurrentDeck,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/exercise',
      name: 'Exercise',
      component: Exercise,
    },
  ],
});

export default router;
