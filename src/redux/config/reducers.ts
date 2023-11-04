import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  PORTFOLIO_LIST_TYPE_VIEW_KEY,
  BLOG_LIST_TYPE_VIEW_KEY,
} from "src/constants/cookiesKeys";
import { ListTypeView } from "src/types";
import { togglePortfolioListTypeView, toggleBlogListTypeView } from "./actions";
import { ConfigState } from "./slice";

type ActionReducerMapBuilderWithConfigState =
  ActionReducerMapBuilder<ConfigState>;

export const togglePortfolioListTypeReducer = (
  builder: ActionReducerMapBuilderWithConfigState
) => {
  builder.addCase(togglePortfolioListTypeView, (state) => {
    const activeListTypeView = state.portfolioListTypeView;
    const changedListTypeView =
      activeListTypeView === ListTypeView.COLUMN
        ? ListTypeView.ROW
        : ListTypeView.COLUMN;

    Cookies.set(PORTFOLIO_LIST_TYPE_VIEW_KEY, changedListTypeView);

    state.portfolioListTypeView = changedListTypeView;
  });
};

export const toggleBlogListTypeReducer = (
  builder: ActionReducerMapBuilderWithConfigState
) => {
  builder.addCase(toggleBlogListTypeView, (state) => {
    const activeListTypeView = state.blogListTypeView;
    const changedListTypeView =
      activeListTypeView === ListTypeView.COLUMN
        ? ListTypeView.ROW
        : ListTypeView.COLUMN;

    Cookies.set(BLOG_LIST_TYPE_VIEW_KEY, changedListTypeView);

    state.blogListTypeView = changedListTypeView;
  });
};
