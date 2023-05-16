import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  WORK_LIST_TYPE_VIEW,
  POST_LIST_TYPE_VIEW,
} from "src/constants/cookiesKeys";
import { ListTypeView } from "src/types";
import { CONFIG_SLICE_NAME } from "./action";
import {
  toggleWorkListTypeReducer,
  togglePostListTypeReducer,
} from "./reducers";

const COOKIE_WORK_LIST_TYPE_VIEW = Cookies.get(WORK_LIST_TYPE_VIEW);
const COOKIE_POST_LIST_TYPE_VIEW = Cookies.get(POST_LIST_TYPE_VIEW);

interface ConfigState {
  workListTypeView: ListTypeView;
  postListTypeView: ListTypeView;
}

const initialState: ConfigState = {
  workListTypeView: COOKIE_WORK_LIST_TYPE_VIEW || ListTypeView.ROW,
  postListTypeView: COOKIE_POST_LIST_TYPE_VIEW || ListTypeView.COLUMN,
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
