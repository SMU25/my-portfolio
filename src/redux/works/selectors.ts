import { createSelector } from "@reduxjs/toolkit";

export const selectWorksState = (state) => state.works;

export const selectIsLoading = createSelector(
  selectWorksState,
  (worksState) => worksState.isLoading
);

export const selectWorks = createSelector(
  selectWorksState,
  (worksState) => worksState.works
);
