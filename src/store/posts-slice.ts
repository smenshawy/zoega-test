import { createSlice } from "@reduxjs/toolkit";

import iPost from "../domain/post";
import { addPost, deletePost, loadPosts } from "./posts-actions";

const initialState: iPost[] = [];

const PostsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state = state.filter(post => post.id !== action.payload);
        return state;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state = [action.payload, ...state];
        return state;
      });
  },
});

export default PostsSlice;