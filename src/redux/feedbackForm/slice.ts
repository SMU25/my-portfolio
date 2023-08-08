import { createSlice } from "@reduxjs/toolkit";
import { FEEDBACK_FORM_SLICE_NAME } from "./action";
import { sendFeedbackFormReducer } from "./reducers";

export interface FeedbackFormState {
  isLoading: boolean;
  success: boolean;
}

const initialState: FeedbackFormState = {
  isLoading: false,
  success: null,
};

export const { reducer: feedbackForm } = createSlice({
  name: FEEDBACK_FORM_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    sendFeedbackFormReducer(builder);
  },
});
