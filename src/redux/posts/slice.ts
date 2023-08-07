import { createSlice } from "@reduxjs/toolkit";
import { IPostItem } from "src/types/post";
import { POSTS_SLICE_NAME } from "./action";
import {
  getPostsReducer,
  getRecentPostsReducer,
  getPostByIdReducer,
} from "./reducers";

export interface PostsState {
  isLoading: boolean;
  posts: IPostItem[];
  recentPosts: IPostItem[];
  postsById: Record<string, IPostItem>;
}

const initialState: PostsState = {
  isLoading: true,
  posts: null,
  recentPosts: null,
  postsById: {},
};

export const { reducer: posts } = createSlice({
  name: POSTS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getPostsReducer(builder);
    getRecentPostsReducer(builder);
    getPostByIdReducer(builder);
  },
});
