import { createSlice } from "@reduxjs/toolkit";

export const serviceFilter = createSlice({
  name: "service_filter",
  initialState: {
    category: "",
  },
  reducers: {
    SetServiceFilterCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const { SetServiceFilterCategory } = serviceFilter.actions;
export default serviceFilter.reducer;
