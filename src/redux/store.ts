import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { posts } from "./posts/slice";
import { works } from "./works/slice";

export const store = configureStore({
  reducer: combineReducers({
    posts,
    works,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
