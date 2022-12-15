import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { IPostItem } from "src/types/post";

export const POSTS_SLICE_NAME = "posts";

interface ParamsGetPostsAsync {
  page?: number;
  limit?: number;
}

// CHANGE - add env

export const getPostsAsync = createAsyncThunk(
  `${POSTS_SLICE_NAME}/fetchPosts`,
  async ({ page = 1, limit = 3 }: ParamsGetPostsAsync, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IPostItem[]>(
        `/posts?page=${page}&limit=${limit}`
      );

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
