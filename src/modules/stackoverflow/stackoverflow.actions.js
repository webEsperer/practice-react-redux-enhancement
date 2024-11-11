import * as types from "./stackoverflow.types";
import API from "./stackoverflow.api";

export const getPosts = (phrase, sort) => (dispatch) => {
  const api = new API();
  api.getPosts(phrase, sort).then((data) => dispatch(setPosts(data.items)));
};

export const setPosts = (posts) => {
  return {
    type: types.SET_POSTS,
    payload: {
      posts,
    },
  };
};

export const setSortAction = (sort) => {
  return {
    type: types.SET_SORT,
    payload: {
      sort,
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
