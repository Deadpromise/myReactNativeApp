import { createSlice } from "@reduxjs/toolkit";

import { registerDB, loginDB, logoutDB } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
      })
      .addCase(registerDB.rejected, (state, action) => {
        console.log("reg error");
      })
      .addCase(loginDB.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(logoutDB.fulfilled, (state) => {
        state = initialState;
      });
  },
});

export const authReducer = authSlice.reducer;
