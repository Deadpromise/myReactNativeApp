import { createSlice } from "@reduxjs/toolkit";

import { registerDB, loginDB, logoutDB } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerDB.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authError = false;
      })
      .addCase(registerDB.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.authError = true;
        console.log("reg error");
      })
      .addCase(loginDB.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authError = false;
      })
      .addCase(loginDB.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.authError = true;
        console.log("login error");
      })
      .addCase(logoutDB.fulfilled, (state) => {
        state.user.email = null;
        state.user.name = null;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
