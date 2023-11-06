import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  PORTFOLIO_LIST_TYPE_VIEW_KEY,
  BLOG_LIST_TYPE_VIEW_KEY,
} from "src/constants/cookiesKeys";
import { ListTypeView } from "src/types";
import { CONFIG_SLICE_NAME } from "./actions";
import {
  togglePortfolioListTypeReducer,
  toggleBlogListTypeReducer,
} from "./reducers";

const PORTFOLIO_LIST_TYPE_VIEW_COOKIES = Cookies.get(
  PORTFOLIO_LIST_TYPE_VIEW_KEY
);
const BLOG_LIST_TYPE_VIEW_COOKIES = Cookies.get(BLOG_LIST_TYPE_VIEW_KEY);

export interface ConfigState {
  portfolioListTypeView: ListTypeView;
  blogListTypeView: ListTypeView;
}

const initialState: ConfigState = {
  portfolioListTypeView: PORTFOLIO_LIST_TYPE_VIEW_COOKIES || ListTypeView.ROW,
  blogListTypeView: BLOG_LIST_TYPE_VIEW_COOKIES || ListTypeView.COLUMN,
};

export const { reducer: config } = createSlice({
  name: CONFIG_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    togglePortfolioListTypeReducer(builder);
    toggleBlogListTypeReducer(builder);
  },
});
