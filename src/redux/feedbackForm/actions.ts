import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFeedbackFormValues } from "src/types/form";
// import emailjs from "@emailjs/browser";

// const SERVICE_ID = "service_ubqvgia";
// const TEMPLATE_ID = "template_55poibc";
// const PUBLIC_ID = "RzRuvgIFl8vQ2hvdV";

export const FEEDBACK_FORM_SLICE_NAME = "feedbackForm";

interface FeedbackFormParams {
  values: IFeedbackFormValues;
  onFinally: VoidFunction;
}

export const sendFeedbackForm = createAsyncThunk(
  `${FEEDBACK_FORM_SLICE_NAME}/fetchFeedbackForm`,
  async ({ values, onFinally }: FeedbackFormParams, { rejectWithValue }) => {
    try {
      // const data = await emailjs.send(
      //   SERVICE_ID,
      //   TEMPLATE_ID,
      //   { ...values },
      //   PUBLIC_ID
      // );

      // return data;

      console.log(values);
    } catch ({ message }) {
      return rejectWithValue(message);
    } finally {
      onFinally();
    }
  }
);
