import * as types from "./github.types";
import API from "./github.api";

export const getRepos = (login) => (dispatch) => {
  const api = new API();
  api.getRepos(login).then((data) => dispatch(setRepos(data)));
};

export const setRepos = (repos) => {
  return {
    type: types.SET_REPOS,
    payload: {
      repos,
    },
  };
};

export const setLoginAction = (login) => {
  return {
    type: types.LOGIN,
    payload: {
      login,
    },
  };
};

export const setPhraseAction = (phrase) => {
  return {
    type: types.PHRASE,
    payload: {
      phrase,
    },
  };
};
