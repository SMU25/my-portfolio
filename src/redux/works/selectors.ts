import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectWorksState = (state: RootState) => state.works;

export const selectIsLoading = createSelector(
  selectWorksState,
  (worksState) => worksState.isLoading
);

export const selectWorks = createSelector(
  selectWorksState,
  (worksState) => worksState.works
);

export const selectWorkById = createSelector(
  selectWorksState,
  (worksState) => worksState.workById
);
