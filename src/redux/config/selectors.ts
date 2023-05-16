import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectConfigState = (state: RootState) => state.config;

export const selectWorkListTypeView = createSelector(
  selectConfigState,
  (configState) => configState.workListTypeView
);

export const selectPostListTypeView = createSelector(
  selectConfigState,
  (configState) => configState.postListTypeView
);
