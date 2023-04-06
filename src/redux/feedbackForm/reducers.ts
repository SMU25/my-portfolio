import { sendFeedbackForm } from "./action";

export const sendFeedbackFormReducer = (builder) => {
  builder.addCase(sendFeedbackForm.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(sendFeedbackForm.fulfilled, (state) => {
    state.isLoading = false;
  });

  builder.addCase(sendFeedbackForm.rejected, (state) => {
    state.isLoading = false;
  });
};
