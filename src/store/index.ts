import { configureStore } from '@reduxjs/toolkit';
import PostsSlice from './posts-slice';

const store = configureStore({ reducer: { posts: PostsSlice.reducer } });

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store