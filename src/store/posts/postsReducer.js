import {
  SET_LOADING,
  SET_ERROR,
  SET_LOADED,
  ADD_OBJECTSEARCH,
  ADD_POSTS,
} from "./postsActions";

const initialState = {
  status: "idle",
  list: {},
  error: null,
  objectSearch: {},
  posts: {},
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OBJECTSEARCH: {
      return { ...state, objectSearch: action.objectSearch };
    }
    case ADD_POSTS: {
      return { ...state, posts: action.posts };
    }
    case SET_LOADING: {
      return {
        ...state,
        status: "loading",
        error: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: "rejected",
        error: action.err,
      };
    }
    case SET_LOADED: {
      return {
        ...state,
        status: "fullfiled",
        error: null,
      };
    }
    default:
      return state;
  }
};
