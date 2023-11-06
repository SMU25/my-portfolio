import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectFeedbackFormState = (state: RootState) => state.feedbackForm;

export const selectIsLoading = createSelector(
  selectFeedbackFormState,
  (feedbackFormState) => feedbackFormState.isLoading
);

export const selectSuccess = createSelector(
  selectFeedbackFormState,
  (feedbackFormState) => feedbackFormState.success
);
