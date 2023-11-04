import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectPortfolioState = (state: RootState) => state.portfolio;

export const selectIsLoading = createSelector(
  selectPortfolioState,
  (portfolioState) => portfolioState.isLoading
);

export const selectPortfolioProjects = createSelector(
  selectPortfolioState,
  (portfolioState) => portfolioState.portfolioProjects
);

export const selectFeaturedPortfolioProjects = createSelector(
  selectPortfolioState,
  (portfolioState) => portfolioState.featuredPortfolioProjects
);

export const selectPortfolioProjectsById = createSelector(
  selectPortfolioState,
  (portfolioState) => portfolioState.portfolioProjectsById
);
