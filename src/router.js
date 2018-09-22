import Vue from 'vue';
import Router from 'vue-router';
import {
  About,
  Login,
} from './views';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
