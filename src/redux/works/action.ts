import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { IWorkItem } from "src/types/work";

export const WORKS_SLICE_NAME = "works";

interface ParamsGetWorksAsync {
  page?: number;
  limit?: number;
  // onlyFeatured
}

// CHANGE - add env

export const getWorksAsync = createAsyncThunk(
  `${WORKS_SLICE_NAME}/fetchWorks`,
  async ({ page = 1, limit }: ParamsGetWorksAsync, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IWorkItem[]>(
        `/works?page=${page}&limit=${limit}`
      );

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
