import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { history } from "src/services/history";
import { PATHNAMES } from "src/constants/routes";
import { IPortfolioProject } from "src/types/portfolio";
import { QueryParams } from "src/types";

export const PORTFOLIO_SLICE_NAME = "portfolio";

export const getPortfolioProjectsAsync = createAsyncThunk(
  `${PORTFOLIO_SLICE_NAME}/fetchPortfolioProjects`,
  async ({ page, limit }: QueryParams, { rejectWithValue }) => {
    try {
      // буде змінено, коли напишу власну API
      // const { data } = await instance.get<IPortfolioProject[]>(
      //   `/portfolio/projects?page=${page}&limit=${limit}`
      // );

      const { data } = await instance.get<IPortfolioProject[]>(
        `/portfolio?page=${page}&limit=${limit}`
      );

      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getFeaturedPortfolioProjectsAsync = createAsyncThunk(
  `${PORTFOLIO_SLICE_NAME}/fetchFeaturedPortfolioProjects`,
  async ({ limit }: Pick<QueryParams, "limit">, { rejectWithValue }) => {
    try {
      // буде змінено, коли напишу власну API
      // const { data } = await instance.get<IPortfolioProject[]>(
      //   `/portfolio/projects/featured?limit=${limit}`
      // );

      const { data } = await instance.get<IPortfolioProject[]>(
        `/portfolio?isFeatured=true&limit=${limit}`
      );

      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getPortfolioProjectByIdAsync = createAsyncThunk(
  `${PORTFOLIO_SLICE_NAME}/fetchPortfolioProjectById`,
  async (id: string, { rejectWithValue }) => {
    try {
      // буде змінено, коли напишу власну API
      // const { data } = await instance.get<IPortfolioProject[]>(
      //   `/portfolio/projects/${id}`
      // );

      const { data } = await instance.get<IPortfolioProject>(
        `/portfolio/${id}`
      );

      return data;
    } catch ({ message }) {
      history.push(PATHNAMES.NOT_FOUND);

      return rejectWithValue(message);
    }
  }
);

// буде використано, коли напишу власну API
// export const getFeaturedPortfolioProjectsAsync = createAsyncThunk(
//   `${PORTFOLIO_SLICE_NAME}/fetchFeaturedProjects`,
//   async ({ page = 1, limit }: QueryParams, { rejectWithValue }) => {
//     try {
//       const { data } = await instance.get<IPortfolioProject[]>(
//         `/featured-projects?page=${page}&limit=${limit}`
//       );

//       return data;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );
