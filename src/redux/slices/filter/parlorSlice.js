import { createSlice } from "@reduxjs/toolkit";

export const parlorFilter = createSlice({
  name: "parlor_filter",
  initialState: {
    city: "",
  },
  reducers: {
    SetParlorFilterCity: (state, action) => {
      state.city = action.payload;
    },
  },
});
export const { SetParlorFilterCity } = parlorFilter.actions;
export default parlorFilter.reducer;
