import { PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IPortfolioProject } from "src/types/portfolio";
import {
  getPortfolioProjectsAsync,
  getFeaturedPortfolioProjectsAsync,
  getPortfolioProjectByIdAsync,
} from "./actions";
import { PortfolioState } from "./slice";

type ActionReducerMapBuilderWithPortfolioState =
  ActionReducerMapBuilder<PortfolioState>;

export const getPortfolioProjectsReducer = (
  builder: ActionReducerMapBuilderWithPortfolioState
) => {
  builder.addCase(getPortfolioProjectsAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getPortfolioProjectsAsync.fulfilled,
    (state, action: PayloadAction<IPortfolioProject[]>) => {
      state.isLoading = false;
      state.portfolioProjects = action.payload;
    }
  );

  builder.addCase(getPortfolioProjectsAsync.rejected, (state) => {
    state.isLoading = false;
    state.portfolioProjects = null;
  });
};

export const getFeaturedPortfolioProjectsReducer = (
  builder: ActionReducerMapBuilderWithPortfolioState
) => {
  builder.addCase(getFeaturedPortfolioProjectsAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getFeaturedPortfolioProjectsAsync.fulfilled,
    (state, action: PayloadAction<IPortfolioProject[]>) => {
      state.isLoading = false;
      state.featuredPortfolioProjects = action.payload;
    }
  );

  builder.addCase(getFeaturedPortfolioProjectsAsync.rejected, (state) => {
    state.isLoading = false;
    state.featuredPortfolioProjects = null;
  });
};

export const getPortfolioProjectByIdReducer = (
  builder: ActionReducerMapBuilderWithPortfolioState
) => {
  builder.addCase(getPortfolioProjectByIdAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getPortfolioProjectByIdAsync.fulfilled,
    (state, action: PayloadAction<IPortfolioProject>) => {
      const portfolioProject = action.payload;

      state.isLoading = false;
      state.portfolioProjectsById = {
        ...state.portfolioProjectsById,
        [portfolioProject.id]: portfolioProject,
      };
    }
  );

  builder.addCase(getPortfolioProjectByIdAsync.rejected, (state) => {
    state.isLoading = false;
  });
};
