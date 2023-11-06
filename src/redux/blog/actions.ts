import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { history } from "src/services/history";
import { PATHNAMES } from "src/constants/routes";
import { IBlogPost } from "src/types/blog";
import { QueryParams } from "src/types";

export const BLOG_SLICE_NAME = "blog";

// CHANGE - add env , додати ,щоб параметри функції були не обов'язкові, може просто зробити об'єект ,який я деструктурую в функції
//перейменувати action => actions

export const getBlogPostsAsync = createAsyncThunk(
  `${BLOG_SLICE_NAME}/fetchBlogPosts`,
  async ({ page = 1, limit }: QueryParams, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IBlogPost[]>(
        `/posts?sortBy=createdAt&order=desc&page=${page}&limit=${limit}`
      );

      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getRecentBlogPostsAsync = createAsyncThunk(
  `${BLOG_SLICE_NAME}/fetchRecentBlogPosts`,
  async ({ limit }: Pick<QueryParams, "limit">, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IBlogPost[]>(
        `/posts?sortBy=createdAt&order=desc&page=1&limit=${limit}`
      );

      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getBlogPostByIdAsync = createAsyncThunk(
  `${BLOG_SLICE_NAME}/fetchBlogPostById`,
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IBlogPost>(`/posts/${id}`);

      return data;
    } catch ({ message }) {
      history.push(PATHNAMES.NOT_FOUND);

      return rejectWithValue(message);
    }
  }
);
