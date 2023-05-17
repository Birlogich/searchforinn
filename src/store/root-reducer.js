import { combineReducers } from "redux";

import { user } from "./login/loginReducer";

export const rootReducer = combineReducers({
  user,
});
