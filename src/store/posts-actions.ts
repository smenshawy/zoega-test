import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dispatch, RootState } from ".";
import iPost from "../domain/post";
import Post from "../domain/post";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: Dispatch;
}>();


// Thunks

export const loadPosts = createAppAsyncThunk<Post[]>(
  "posts/loadPosts",
  async () => {
    try {
      const posts = await getPostsRequest();
      return posts;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

export const deletePost = createAppAsyncThunk<number, number>(
  "posts/deletePost",
  async (id: number) => {
    try {
      await deletePostsRequest(id);
      return id;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }
);

export const addPost = createAppAsyncThunk<Post, Post>(
  "posts/addPost",
  async (post: Post) => {
    try {
      const newPost = await addPostsRequest(post);
      return newPost;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

//Helpers

const getPostsRequest = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
    if (!response.ok) {
      throw new Error("fetching posts failed");
    }
  
    const data = await response.json();
    return data;
  };
  
  const deletePostsRequest = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
  
    if (!response.ok) {
      throw new Error("fetching posts failed");
    }
  };
  
  const addPostsRequest = async ({ title, body, userId }: iPost) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  
    if (!response.ok) {
      throw new Error("fetching posts failed");
    }
  
    const data = await response.json();
    return data;
  };
  
