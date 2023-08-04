import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { history } from "src/services/history";
import { PATHNAMES } from "src/constants/routes";
import { IWorkItem } from "src/types/work";

export const WORKS_SLICE_NAME = "works";

interface QueryParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export const getWorksAsync = createAsyncThunk(
  `${WORKS_SLICE_NAME}/fetchWorks`,
  async ({ page = 1, limit }: QueryParams, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IWorkItem[]>(
        `/portfolio?page=${page}&limit=${limit}`
      );

      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getWorkByIdAsync = createAsyncThunk(
  `${WORKS_SLICE_NAME}/fetchWorkById`,
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IWorkItem>(`/portfolio/${id}`);

      return data;
    } catch ({ message }) {
      history.push(PATHNAMES.NOT_FOUND);

      return rejectWithValue(message);
    }
  }
);

// буде використано, коли напишу власну API
// export const getFeaturedWorksAsync = createAsyncThunk(
//   `${WORKS_SLICE_NAME}/fetchFeaturedWorks`,
//   async ({ page = 1, limit }: QueryParams, { rejectWithValue }) => {
//     try {
//       const { data } = await instance.get<IWorkItem[]>(
//         `/featured-works?page=${page}&limit=${limit}`
//       );

//       return data;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );
