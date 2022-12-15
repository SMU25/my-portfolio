import { PayloadAction } from "@reduxjs/toolkit";
import { IPostItem } from "src/types/post";
import { getPostsAsync } from "./action";

export const getPostsReducer = (builder) => {
  builder.addCase(getPostsAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getPostsAsync.fulfilled,
    (state, action: PayloadAction<IPostItem[]>) => {
      state.isLoading = true;
      state.posts = action.payload;
    }
  );

  builder.addCase(getPostsAsync.rejected, (state) => {
    state.isLoading = true;
    state.posts = null;
  });
};
