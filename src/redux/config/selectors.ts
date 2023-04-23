import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectConfigState = (state: RootState) => state.config;

export const selectPostListTypeView = createSelector(
  selectConfigState,
  (configState) => configState.postListTypeView
);
