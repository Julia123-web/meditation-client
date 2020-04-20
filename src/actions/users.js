import axios from "axios";

export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const dbUrl = process.DATABASE_URL || "https://meditation-server.herokuapp.com";

function signUpSuccess() {
  return {
    type: USER_CREATED,
  };
}

export function signUp(name, email, password) {
  return async function (dispatch, getState) {
    console.log("-----SIGNUPDATA......", name, email, password);
    const response = await axios.post(`${dbUrl}/user`, {
      email: email,
      name: name,
      password: password,
    });
    if (response.status === 201) {
      dispatch(signUpSuccess());
    }
  };
}

function loginSuccess(userData) {
  return {
    type: "LOGIN_SUCCESS",
    payload: userData,
  };
}
export function login(email, password) {
  return async function (dispatch, getState) {
    const response = await axios.post(`${dbUrl}/login`, {
      email,
      password,
    });
    console.log("------LOGIN----", response.data);
    dispatch(loginSuccess(response.data));
  };
}
