import Vue from 'vue';
import Router from 'vue-router';
import {
  About,
  Home,
  Login,
  Menu,
  News,
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
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/home',
          redirect: '/',
        },
        {
          path: '/menu',
          name: 'menu',
          component: Menu,
        },
        {
          path: '/news',
          component: News,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
