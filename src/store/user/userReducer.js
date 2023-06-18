import { ADD_USER, SET_LOADING, SET_ERROR, SET_LOADED } from "./userActions";

const initialState = {
  status: "idle",
  list: {},
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        list: { login: action.login, password: action.password },
        status: "fullfiled",
      };
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
    default: {
      return state;
    }
  }
};
