import { createSlice } from "@reduxjs/toolkit";
import { IPostItem } from "src/types/post";
import { POSTS_SLICE_NAME } from "./action";
import { getPostsReducer } from "./reducers";

interface PostsState {
  isLoading: boolean;
  posts: IPostItem[];
}

const initialState: PostsState = {
  isLoading: false,
  posts: null,
};

export const { reducer: posts } = createSlice({
  name: POSTS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getPostsReducer(builder);
  },
});
