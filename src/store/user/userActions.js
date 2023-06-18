import { client } from "../../api/client";

export const ADD_USER = "@@user/ADD_USER";
export const SET_LOADING = "@@user/SET_LOADING";
export const SET_ERROR = "@@user/SET_ERROR";
export const SET_LOADED = "@@user/SET_LOADED";

const addUser = (login, password) => ({
  type: ADD_USER,
  login,
  password,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (err) => ({
  type: SET_ERROR,
  err,
});

export const setLoaded = () => ({
  type: SET_LOADED,
});

export const registerUser = (login, password) => (dispatch) => {
  dispatch(setLoading());

  client("https://gateway.scan-interfax.ru/api/v1/account/login", {
    body: dispatch(addUser(login, password)),
  })
    .then((json) => {
      const { accessToken, expire } = json;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("expire", expire);
    })
    .catch((err) => dispatch(setError(err)));
};
