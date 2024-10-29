import { createSlice } from "@reduxjs/toolkit";

export const feedbackFilter = createSlice({
  name: "feedback",
  initialState: {
    order_id: "",
    doctor_id: "",
    service_id: "",
    products: [],
    service: 0,
    doctor: 0,
    message: "",
  },
  reducers: {
    SetFeedbackProducts: (state, action) => {
      state.products = action.payload;
    },
    SetFeedbackService: (state, action) => {
      state.service = action.payload;
    },
    SetFeedbackDoctor: (state, action) => {
      state.doctor = action.payload;
    },
    SetFeedbackMessage: (state, action) => {
      state.message = action.payload;
    },
    SetFeedbackOrderId: (state, action) => {
      state.order_id = action.payload;
    },
    SetFeedbackDoctorId: (state, action) => {
      state.doctor_id = action.payload;
    },
    SetFeedbackServiceId: (state, action) => {
      state.service_id = action.payload;
    },
    SetResetFeedback: (state, action) => {
      state.message = "";
      state.order_id = "";
      state.service_id = "";
      state.doctor_id = "";
      state.doctor = 0;
      state.service = 0;
      state.products = [];
    },
  },
});
export const {
  SetFeedbackProducts,
  SetFeedbackDoctor,
  SetResetFeedback,
  SetFeedbackMessage,
  SetFeedbackService,
  SetFeedbackOrderId,
  SetFeedbackServiceId,
  SetFeedbackDoctorId,
} = feedbackFilter.actions;
export default feedbackFilter.reducer;
