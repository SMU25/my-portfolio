import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectBlogState = (state: RootState) => state.blog;

export const selectIsLoading = createSelector(
  selectBlogState,
  (blogState) => blogState.isLoading
);

export const selectBlogPosts = createSelector(
  selectBlogState,
  (blogState) => blogState.blogPosts
);

export const selectRecentBlogPosts = createSelector(
  selectBlogState,
  (blogState) => blogState.recentBlogPosts
);

export const selectBlogPostsById = createSelector(
  selectBlogState,
  (blogState) => blogState.blogPostsById
);
