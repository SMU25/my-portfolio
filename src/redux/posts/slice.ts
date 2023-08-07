import { createSlice } from "@reduxjs/toolkit";
import { IPostItem } from "src/types/post";
import { POSTS_SLICE_NAME } from "./action";
import {
  getPostsReducer,
  getRecentPostsReducer,
  getPostByIdReducer,
} from "./reducers";

interface PostsState {
  isLoading: boolean;
  posts: IPostItem[];
  recentPosts: IPostItem[];
  postById: IPostItem;
}

const initialState: PostsState = {
  isLoading: true,
  posts: null,
  recentPosts: null,
  postById: null,
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
