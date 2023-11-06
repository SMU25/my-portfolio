import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { config } from "./config/slice";
import { portfolio } from "./portfolio/slice";
import { blog } from "./blog/slice";
import { feedbackForm } from "./feedbackForm/slice";

export const store = configureStore({
  reducer: combineReducers({
    config,
    portfolio,
    blog,
    feedbackForm,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
