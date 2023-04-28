import { createSlice } from "@reduxjs/toolkit";

const userID = localStorage.getItem("userID") || "";
const password = localStorage.getItem("password") || "";
const loginAs = localStorage.getItem("loginAs") || "";

const initialState = {
  input: {
    userID: userID,
    password: password,
    loginAs: loginAs,
    rememberMe: false,
  },
  auth: {
    uid: userID && password,
  },
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.input = action.payload;
      state.auth.uid = true;
    },
    logout: (state) => {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("loginAs");

      state.input = initialState.input;
      state.auth.uid = initialState.auth.uid;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
