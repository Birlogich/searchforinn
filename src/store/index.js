import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
/* import { persistStore, persistReducer } from "redux-persist"; */
import { composeWithDevTools } from "redux-devtools-extension";
/* import storage from "redux-persist/lib/storage"; */
import { rootReducer } from "./root-reducer";

/* const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistConfig = {
  key: "root",
  storage,
};
 */

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
