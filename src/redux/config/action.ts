import { createAction } from "@reduxjs/toolkit";

export const CONFIG_SLICE_NAME = "config";

export const togglePostListTypeView = createAction(
  `${CONFIG_SLICE_NAME}/togglePostListTypeView`
);
