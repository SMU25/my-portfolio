import { createSlice } from "@reduxjs/toolkit";
import { IBlogPost } from "src/types/blog";
import { BLOG_SLICE_NAME } from "./actions";
import {
  getBlogPostsReducer,
  getRecentBlogPostsReducer,
  getBlogPostByIdReducer,
} from "./reducers";

export interface BlogState {
  isLoading: boolean;
  blogPosts: IBlogPost[];
  recentBlogPosts: IBlogPost[];
  blogPostsById: Record<string, IBlogPost>;
}

const initialState: BlogState = {
  isLoading: true,
  blogPosts: null,
  recentBlogPosts: null,
  blogPostsById: {},
};

export const { reducer: blog } = createSlice({
  name: BLOG_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getBlogPostsReducer(builder);
    getRecentBlogPostsReducer(builder);
    getBlogPostByIdReducer(builder);
  },
});
