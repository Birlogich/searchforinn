import {
  ADD_REQUEST_HISTOGRAMS,
  SET_LOADING,
  SET_ERROR,
  SET_LOADED,
  ADD_HISTOGRAMS,
} from "./companiesActions";

export const histogramsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_REQUEST_HISTOGRAMS: {
      return action.data;
    }
    case ADD_HISTOGRAMS: {
      return action.histostograms;
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
