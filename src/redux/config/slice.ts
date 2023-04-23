import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { POST_LIST_TYPE_VIEW } from "src/constants/cookiesKeys";
import { ListTypeView } from "src/types";
import { CONFIG_SLICE_NAME } from "./action";
import { togglePostListTypeReducer } from "./reducers";

const COOKIE_POST_LIST_TYPE_VIEW = Cookies.get(POST_LIST_TYPE_VIEW);

interface ConfigState {
  postListTypeView: ListTypeView;
}

const initialState: ConfigState = {
  postListTypeView: COOKIE_POST_LIST_TYPE_VIEW || ListTypeView.COLUMN,
};

export const { reducer: config } = createSlice({
  name: CONFIG_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    togglePostListTypeReducer(builder);
  },
});
