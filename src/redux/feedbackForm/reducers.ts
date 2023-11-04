import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { sendFeedbackForm } from "./actions";
import { FeedbackFormState } from "./slice";

type ActionReducerMapBuilderWithFormState =
  ActionReducerMapBuilder<FeedbackFormState>;

export const sendFeedbackFormReducer = (
  builder: ActionReducerMapBuilderWithFormState
) => {
  builder.addCase(sendFeedbackForm.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(sendFeedbackForm.fulfilled, (state) => {
    state.isLoading = false;
    state.success = true;
  });

  builder.addCase(sendFeedbackForm.rejected, (state) => {
    state.isLoading = false;
    state.success = false;
  });
};
