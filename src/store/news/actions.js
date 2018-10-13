import api from '../../api/';

export default {
  addNews({ commit }, news) {
    commit('ADD_NEWS', news);
  },
  deleteNews({ commit }, news) {
    commit('DELETE_NEWS', news);
  },
  getNews({ commit }) {
    api.getNews()
      .then((news) => {
        commit('GET_NEWS', news);
      });
  },
  updateNews({ commit }, news) {
    commit('UPDATE_NEWS', news);
  },
};
