import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, getPostById } from "./operations";

const initialState = {
  items: [],
  commentsData: {},
  isPostsLoading: false,
  postsLoadingError: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        //   console.log("payload", action.payload);
        state.items = action.payload;
        state.isPostsLoading = false;
        state.postsLoadingError = false;
      })
      .addCase(getAllPosts.pending, (state, action) => {
        state.isPostsLoading = true;
        state.postsLoadingError = false;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isPostsLoading = false;
        state.postsLoadingError = true;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.commentsData = action.payload;
      });
  },
});

export const postsReducer = postsSlice.reducer;
