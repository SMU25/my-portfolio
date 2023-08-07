import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectPostsState = (state: RootState) => state.posts;

export const selectIsLoading = createSelector(
  selectPostsState,
  (postsState) => postsState.isLoading
);

export const selectPosts = createSelector(
  selectPostsState,
  (postsState) => postsState.posts
);

export const selectRecentPosts = createSelector(
  selectPostsState,
  (postsState) => postsState.recentPosts
);

export const selectPostById = createSelector(
  selectPostsState,
  (postsState) => postsState.postById
);
