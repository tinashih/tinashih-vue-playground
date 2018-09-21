import firebase from 'firebase';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { firebaseConfig } from '../private';

Vue.config.productionTip = false;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
