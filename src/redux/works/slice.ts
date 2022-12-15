import { createSlice } from "@reduxjs/toolkit";
import { IWorkItem } from "src/types/work";
import { WORKS_SLICE_NAME } from "./action";
import { getWorksReducer } from "./reducers";

interface WorksState {
  isLoading: boolean;
  works: IWorkItem[];
}

const initialState: WorksState = {
  isLoading: false,
  works: null,
};

export const { reducer: works } = createSlice({
  name: WORKS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getWorksReducer(builder);
  },
});
