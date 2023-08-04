import { PayloadAction } from "@reduxjs/toolkit";
import { IPostItem } from "src/types/post";
import { getPostsAsync, getPostByIdAsync } from "./action";

export const getPostsReducer = (builder) => {
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

export const getPostByIdReducer = (builder) => {
  builder.addCase(getPostByIdAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getPostByIdAsync.fulfilled,
    (state, action: PayloadAction<IPostItem>) => {
      state.isLoading = false;
      state.postById = action.payload;
    }
  );

  builder.addCase(getPostByIdAsync.rejected, (state) => {
    state.isLoading = false;
    state.postById = null;
  });
};
