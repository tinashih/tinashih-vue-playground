import Vue from 'vue';
import Vuex from 'vuex';

import about from './about/';
import news from './news/';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    about,
    news,
  },
  strict: debug,
});
