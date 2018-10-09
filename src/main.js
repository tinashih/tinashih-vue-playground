import firebase from 'firebase';
import Vue from 'vue';

// Element UI
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import '../theme/index.css';

import App from './App.vue';
import router from './router';
import store from './store/';
import { firebaseConfig } from '../private';

Vue.config.productionTip = false;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Configure language
locale.use(lang);

// Using plugins
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
