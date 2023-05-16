import { legacy_createStore as createStore } from "redux";
import { user } from "./login/loginReducer";

export const store = createStore(user);
