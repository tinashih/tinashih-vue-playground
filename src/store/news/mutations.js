export default {
  ADD_NEWS(state, news) {
    const newState = state;
    newState.news = news;

    return newState;
  },
  DELETE_NEWS(state, news) {
    const newState = state;
    newState.news = news;

    return newState;
  },
  GET_NEWS(state, news) {
    const newState = state;
    newState.news = news;

    return newState;
  },
  UPDATE_NEWS(state, newsObj) {
    const newState = state;
    const { news } = newState;
    news.splice(news.indexOf(newsObj), 1);
    newState.news = news;

    return newState;
  },
};
