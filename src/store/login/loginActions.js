export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (login, password) => ({
  type: LOGIN_USER,
  login,
  password,
});
