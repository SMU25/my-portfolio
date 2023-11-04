import { createAction } from "@reduxjs/toolkit";

export const CONFIG_SLICE_NAME = "config";

export const togglePortfolioListTypeView = createAction(
  `${CONFIG_SLICE_NAME}/togglePortfolioListTypeView`
);

export const toggleBlogListTypeView = createAction(
  `${CONFIG_SLICE_NAME}/toggleBlogListTypeView`
);
