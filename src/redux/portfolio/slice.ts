import { createSlice } from "@reduxjs/toolkit";
import { IPortfolioProject } from "src/types/portfolio";
import { PORTFOLIO_SLICE_NAME } from "./actions";
import {
  getPortfolioProjectsReducer,
  getFeaturedPortfolioProjectsReducer,
  getPortfolioProjectByIdReducer,
} from "./reducers";

export interface PortfolioState {
  isLoading: boolean;
  portfolioProjects: IPortfolioProject[];
  featuredPortfolioProjects: IPortfolioProject[];
  portfolioProjectsById: Record<string, IPortfolioProject>;
}

const initialState: PortfolioState = {
  isLoading: true,
  portfolioProjects: null,
  featuredPortfolioProjects: null,
  portfolioProjectsById: {},
};

export const { reducer: portfolio } = createSlice({
  name: PORTFOLIO_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getPortfolioProjectsReducer(builder);
    getFeaturedPortfolioProjectsReducer(builder);
    getPortfolioProjectByIdReducer(builder);
  },
});
