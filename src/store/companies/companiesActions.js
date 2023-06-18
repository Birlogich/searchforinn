import { client } from "../../api/client";

export const ADD_REQUEST_HISTOGRAMS = "@@companies/ADD_REQUEST_HISTOGRAMS";
export const SET_LOADING = "@@companies/SET_LOADING";
export const SET_ERROR = "@@companies/SET_ERROR";
export const SET_LOADED = "@@companies/SET_LOADED";
export const ADD_HISTOGRAMS = "@@companies/ADD_HISTOGRAMS";

export const addRequestHistograms = (data) => ({
  type: ADD_REQUEST_HISTOGRAMS,
  data,
});

const addHistograms = (histostograms) => ({
  type: ADD_HISTOGRAMS,
  histostograms,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  err,
});

const setLoaded = () => ({
  type: SET_LOADED,
});

export const getHistogtams = (data, accessToken) => (dispatch) => {
  dispatch(setLoading());

  client("https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms", {
    body: data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((json) => {
      dispatch(addHistograms(json));
      dispatch(setLoaded());
    })
    .catch((err) => dispatch(setError(err)));
};
