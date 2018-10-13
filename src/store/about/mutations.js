export default {
  GET_ABOUT(state, about) {
    const newState = state;
    newState.about = about;

    return newState;
  },
  UPDATE_ABOUT(state, aboutObj) {
    const newState = state;
    const { about } = newState;
    about.splice(about.indexOf(aboutObj), 1);
    newState.about = about;

    return newState;
  },
};
