import { createSlice } from "@reduxjs/toolkit";
import { FEEDBACK_FORM_SLICE_NAME } from "./action";
import { sendFeedbackFormReducer } from "./reducers";

interface FeedbackFormState {
  isLoading: boolean;
}

const initialState: FeedbackFormState = {
  isLoading: false,
};

export const { reducer: feedbackForm } = createSlice({
  name: FEEDBACK_FORM_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    sendFeedbackFormReducer(builder);
  },
});
