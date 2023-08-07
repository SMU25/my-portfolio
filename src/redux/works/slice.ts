import { createSlice } from "@reduxjs/toolkit";
import { IWorkItem } from "src/types/work";
import { WORKS_SLICE_NAME } from "./action";
import {
  getWorksReducer,
  getFeaturedWorksReducer,
  getWorkByIdReducer,
} from "./reducers";

interface WorksState {
  isLoading: boolean;
  works: IWorkItem[];
  featuredWorks: IWorkItem[];
  workById: IWorkItem;
}

const initialState: WorksState = {
  isLoading: true,
  works: null,
  featuredWorks: null,
  workById: null,
};

export const { reducer: works } = createSlice({
  name: WORKS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getWorksReducer(builder);
    getWorkByIdReducer(builder);
    getFeaturedWorksReducer(builder);
  },
});
