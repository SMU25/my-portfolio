import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectConfigState = (state: RootState) => state.config;

export const selectPortfolioListTypeView = createSelector(
  selectConfigState,
  (configState) => configState.portfolioListTypeView
);

export const selectBlogListTypeView = createSelector(
  selectConfigState,
  (configState) => configState.blogListTypeView
);
