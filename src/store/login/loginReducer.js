import { LOGIN_USER } from "./loginActions";

export const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return { ...state, [action.target.name]: action.target.value.trim() };
    }
    default: {
      return state;
    }
  }
};
