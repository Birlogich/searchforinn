import { client } from "../../api/client";
export const ADD_OBJECTSEARCH = "@@posts/ADD_OBJECTSEARCH";
export const ADD_POSTS = "@@posts/ADD_POSTS";
export const SET_LOADING = "@@posts/SET_LOADING";
export const SET_ERROR = "@@posts/SET_ERROR";
export const SET_LOADED = "@@posts/SET_LOADED";

const addObjectSearch = (objectSearch) => ({
  type: ADD_OBJECTSEARCH,
  objectSearch,
});

const setError = (err) => ({
  type: SET_ERROR,
  err,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

const addPosts = (posts) => ({
  type: ADD_POSTS,
  posts,
});

export const setLoaded = () => ({
  type: SET_LOADED,
});

export const getObjectSearch = (body, accessToken) => (dispatch) => {
  dispatch(setLoading());

  client("https://gateway.scan-interfax.ru/api/v1/objectsearch", {
    body,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((json) => {
      const objOfIds = { ids: json.items.map((o) => o.encodedId) };
      dispatch(addObjectSearch(objOfIds));
      dispatch(setLoaded());
    })
    .catch((err) => dispatch(setError(err)));
};

export const getPosts = (body, accessToken) => (dispatch) => {
  dispatch(setLoading());

  client("https://gateway.scan-interfax.ru/api/v1/documents", {
    body,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((json) => {
      dispatch(addPosts(json));
      dispatch(setLoaded());
    })
    .catch((err) => dispatch(setError(err)));
};
