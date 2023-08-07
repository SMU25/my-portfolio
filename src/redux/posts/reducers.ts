import { PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IPostItem } from "src/types/post";
import { getPostsAsync, getRecentPostsAsync, getPostByIdAsync } from "./action";
import { PostsState } from "./slice";

type ActionReducerMapBuilderWithPostsState =
  ActionReducerMapBuilder<PostsState>;

export const getPostsReducer = (
  builder: ActionReducerMapBuilderWithPostsState
) => {
  builder.addCase(getPostsAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getPostsAsync.fulfilled,
    (state, action: PayloadAction<IPostItem[]>) => {
      state.isLoading = false;
      state.posts = action.payload;
    }
  );

  builder.addCase(getPostsAsync.rejected, (state) => {
    state.isLoading = false;
    state.posts = null;
  });
};

export const getRecentPostsReducer = (
  builder: ActionReducerMapBuilderWithPostsState
) => {
  builder.addCase(getRecentPostsAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getRecentPostsAsync.fulfilled,
    (state, action: PayloadAction<IPostItem[]>) => {
      state.isLoading = false;
      state.recentPosts = action.payload;
    }
  );

  builder.addCase(getRecentPostsAsync.rejected, (state) => {
    state.isLoading = false;
    state.recentPosts = null;
  });
};

export const getPostByIdReducer = (
  builder: ActionReducerMapBuilderWithPostsState
) => {
  builder.addCase(getPostByIdAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getPostByIdAsync.fulfilled,
    (state, action: PayloadAction<IPostItem>) => {
      const post = action.payload;

      state.isLoading = false;
      state.postsById = { ...state.postsById, [post.id]: post };
    }
  );

  builder.addCase(getPostByIdAsync.rejected, (state) => {
    state.isLoading = false;
  });
};
