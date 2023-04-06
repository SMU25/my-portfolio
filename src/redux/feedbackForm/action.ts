import { createAsyncThunk } from "@reduxjs/toolkit";
// import emailjs from "@emailjs/browser";

// const SERVICE_ID = "service_ubqvgia";
// const TEMPLATE_ID = "template_55poibc";
// const PUBLIC_ID = "RzRuvgIFl8vQ2hvdV";

export const FEEDBACK_FORM_SLICE_NAME = "feedbackForm";

interface FeedbackFormAsyncParams extends HTMLFormElement {
  userName: string;
  lastName?: string;
  phone: string;
  email: string;
  message: string;
}

export const sendFeedbackForm = createAsyncThunk(
  `${FEEDBACK_FORM_SLICE_NAME}/fetchFeedbackForm`,
  async (formData: FeedbackFormAsyncParams, { rejectWithValue }) => {
    try {
      // const data = await emailjs.send(
      //   SERVICE_ID,
      //   TEMPLATE_ID,
      //   formData,
      //   PUBLIC_ID
      // );

      // return data;

      console.log(formData);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
