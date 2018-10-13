import api from '../../api/';

export default {
  getAbout({ commit }) {
    api.getAbout()
      .then((about) => {
        commit('GET_ABOUT', about);
      });
  },
  updateAbout({ commit }, about) {
    commit('UPDATE_ABOUT', about);
  },
};
