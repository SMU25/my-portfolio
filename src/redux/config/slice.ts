import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  WORK_LIST_TYPE_VIEW_KEY,
  POST_LIST_TYPE_VIEW_KEY,
} from "src/constants/cookiesKeys";
import { ListTypeView } from "src/types";
import { CONFIG_SLICE_NAME } from "./action";
import {
  toggleWorkListTypeReducer,
  togglePostListTypeReducer,
} from "./reducers";

const COOKIES_WORK_LIST_TYPE_VIEW = Cookies.get(WORK_LIST_TYPE_VIEW_KEY);
const COOKIES_POST_LIST_TYPE_VIEW = Cookies.get(POST_LIST_TYPE_VIEW_KEY);

interface ConfigState {
  workListTypeView: ListTypeView;
  postListTypeView: ListTypeView;
}

const initialState: ConfigState = {
  workListTypeView: COOKIES_WORK_LIST_TYPE_VIEW || ListTypeView.ROW,
  postListTypeView: COOKIES_POST_LIST_TYPE_VIEW || ListTypeView.COLUMN,
};

export const { reducer: config } = createSlice({
  name: CONFIG_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    togglePostListTypeReducer(builder);
    toggleWorkListTypeReducer(builder);
  },
});
