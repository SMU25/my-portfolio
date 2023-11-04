import { PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IBlogPost } from "src/types/blog";
import {
  getBlogPostsAsync,
  getRecentBlogPostsAsync,
  getBlogPostByIdAsync,
} from "./actions";
import { BlogState } from "./slice";

type ActionReducerMapBuilderWithBlogState = ActionReducerMapBuilder<BlogState>;

export const getBlogPostsReducer = (
  builder: ActionReducerMapBuilderWithBlogState
) => {
  builder.addCase(getBlogPostsAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getBlogPostsAsync.fulfilled,
    (state, action: PayloadAction<IBlogPost[]>) => {
      state.isLoading = false;
      state.blogPosts = action.payload;
    }
  );

  builder.addCase(getBlogPostsAsync.rejected, (state) => {
    state.isLoading = false;
    state.blogPosts = null;
  });
};

export const getRecentBlogPostsReducer = (
  builder: ActionReducerMapBuilderWithBlogState
) => {
  builder.addCase(getRecentBlogPostsAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getRecentBlogPostsAsync.fulfilled,
    (state, action: PayloadAction<IBlogPost[]>) => {
      state.isLoading = false;
      state.recentBlogPosts = action.payload;
    }
  );

  builder.addCase(getRecentBlogPostsAsync.rejected, (state) => {
    state.isLoading = false;
    state.recentBlogPosts = null;
  });
};

export const getBlogPostByIdReducer = (
  builder: ActionReducerMapBuilderWithBlogState
) => {
  builder.addCase(getBlogPostByIdAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getBlogPostByIdAsync.fulfilled,
    (state, action: PayloadAction<IBlogPost>) => {
      const blogPost = action.payload;

      state.isLoading = false;
      state.blogPostsById = { ...state.blogPostsById, [blogPost.id]: blogPost };
    }
  );

  builder.addCase(getBlogPostByIdAsync.rejected, (state) => {
    state.isLoading = false;
  });
};
