import { createSelector } from "@reduxjs/toolkit";

export const selectPostsState = (state) => state.posts;

export const selectIsLoading = createSelector(
  selectPostsState,
  (postsState) => postsState.isLoading
);

export const selectPosts = createSelector(
  selectPostsState,
  (postsState) => postsState.posts
);
