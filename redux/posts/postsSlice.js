import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase();
  },
});

export const postsReducer = postsSlice.reducer;
