import { LOGIN_USER } from "./loginActions";

export const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return { ...state, user: action.obj };
    }
    default: {
      return state;
    }
  }
};
