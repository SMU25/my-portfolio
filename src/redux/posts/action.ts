import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { IPostItem } from "src/types/post";

export const POSTS_SLICE_NAME = "posts";

interface ParamsGetPostsAsync {
  page?: number;
  limit?: number;
}

// CHANGE - add env , додати ,щоб параметри функції були не обов'язкові, може просто зробити об'єект ,який я деструктурую в функції

export const getPostsAsync = createAsyncThunk(
  `${POSTS_SLICE_NAME}/fetchPosts`,
  async ({ page = 1, limit }: ParamsGetPostsAsync, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IPostItem[]>(
        `/posts?sortBy=createdAt&order=desc&page=${page}&limit=${limit}`
      );

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
