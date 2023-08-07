import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  WORK_LIST_TYPE_VIEW_KEY,
  POST_LIST_TYPE_VIEW_KEY,
} from "src/constants/cookiesKeys";
import { ListTypeView } from "src/types";
import { toggleWorkListTypeView, togglePostListTypeView } from "./action";
import { ConfigState } from "./slice";

type ActionReducerMapBuilderWithConfigState =
  ActionReducerMapBuilder<ConfigState>;

export const toggleWorkListTypeReducer = (
  builder: ActionReducerMapBuilderWithConfigState
) => {
  builder.addCase(toggleWorkListTypeView, (state) => {
    const activeListTypeView = state.workListTypeView;
    const changedListTypeView =
      activeListTypeView === ListTypeView.COLUMN
        ? ListTypeView.ROW
        : ListTypeView.COLUMN;

    Cookies.set(WORK_LIST_TYPE_VIEW_KEY, changedListTypeView);

    state.workListTypeView = changedListTypeView;
  });
};

export const togglePostListTypeReducer = (
  builder: ActionReducerMapBuilderWithConfigState
) => {
  builder.addCase(togglePostListTypeView, (state) => {
    const activeListTypeView = state.postListTypeView;
    const changedListTypeView =
      activeListTypeView === ListTypeView.COLUMN
        ? ListTypeView.ROW
        : ListTypeView.COLUMN;

    Cookies.set(POST_LIST_TYPE_VIEW_KEY, changedListTypeView);

    state.postListTypeView = changedListTypeView;
  });
};
