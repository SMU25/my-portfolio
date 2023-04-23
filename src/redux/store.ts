import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { posts } from "./posts/slice";
import { works } from "./works/slice";
import { feedbackForm } from "./feedbackForm/slice";
import { config } from "./config/slice";

export const store = configureStore({
  reducer: combineReducers({
    posts,
    works,
    feedbackForm,
    config,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
