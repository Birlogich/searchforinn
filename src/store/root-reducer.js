import { combineReducers } from "redux";

import { userReducer } from "./user/userReducer";
import { histogramsReducer } from "./companies/companiesReducer";
import { postsReducer } from "./posts/postsReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  histograms: histogramsReducer,
  posts: postsReducer,
});
