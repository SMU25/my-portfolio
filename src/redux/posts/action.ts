import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { history } from "src/services/history";
import { PATHNAMES } from "src/constants/routes";
import { IPostItem } from "src/types/post";

export const POSTS_SLICE_NAME = "posts";

interface QueryParams {
  page?: number | string;
  limit?: number;
  offset?: number;
}

// CHANGE - add env , додати ,щоб параметри функції були не обов'язкові, може просто зробити об'єект ,який я деструктурую в функції
//перейменувати action => actions

export const getPostsAsync = createAsyncThunk(
  `${POSTS_SLICE_NAME}/fetchPosts`,
  async ({ page = 1, limit }: QueryParams, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IPostItem[]>(
        `/posts?sortBy=createdAt&order=desc&page=${page}&limit=${limit}`
      );

      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getRecentPostsAsync = createAsyncThunk(
  `${POSTS_SLICE_NAME}/fetchRecentPosts`,
  async ({ limit }: Pick<QueryParams, "limit">, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IPostItem[]>(
        `/posts?sortBy=createdAt&order=desc&page=1&limit=${limit}`
      );

      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getPostByIdAsync = createAsyncThunk(
  `${POSTS_SLICE_NAME}/fetchPostById`,
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IPostItem>(`/posts/${id}`);

      return data;
    } catch ({ message }) {
      history.push(PATHNAMES.NOT_FOUND);

      return rejectWithValue(message);
    }
  }
);
