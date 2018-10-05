import Vue from 'vue';
import Router from 'vue-router';
import {
  About,
  Home,
  Login,
} from './views';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home',
          redirect: '/',
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
      ],
    },
    {
      path: '/login',
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
