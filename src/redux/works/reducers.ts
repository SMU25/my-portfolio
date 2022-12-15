import { PayloadAction } from "@reduxjs/toolkit";
import { IWorkItem } from "src/types/work";
import { getWorksAsync } from "./action";

export const getWorksReducer = (builder) => {
  builder.addCase(getWorksAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getWorksAsync.fulfilled,
    (state, action: PayloadAction<IWorkItem[]>) => {
      state.isLoading = true;
      state.works = action.payload;
    }
  );

  builder.addCase(getWorksAsync.rejected, (state) => {
    state.isLoading = true;
    state.works = null;
  });
};
