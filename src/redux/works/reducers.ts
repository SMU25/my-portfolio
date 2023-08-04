import { PayloadAction } from "@reduxjs/toolkit";
import { IWorkItem } from "src/types/work";
import { getWorksAsync, getWorkByIdAsync } from "./action";

export const getWorksReducer = (builder) => {
  builder.addCase(getWorksAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getWorksAsync.fulfilled,
    (state, action: PayloadAction<IWorkItem[]>) => {
      state.isLoading = false;
      state.works = action.payload;
    }
  );

  builder.addCase(getWorksAsync.rejected, (state) => {
    state.isLoading = false;
    state.works = [];
  });
};

export const getWorkByIdReducer = (builder) => {
  builder.addCase(getWorkByIdAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getWorkByIdAsync.fulfilled,
    (state, action: PayloadAction<IWorkItem>) => {
      state.isLoading = false;
      state.workById = action.payload;
    }
  );

  builder.addCase(getWorkByIdAsync.rejected, (state) => {
    state.isLoading = false;
    state.workById = null;
  });
};
