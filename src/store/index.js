import Vue from 'vue';
import Vuex from 'vuex';

import about from './about/';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    about,
  },
  strict: debug,
});
