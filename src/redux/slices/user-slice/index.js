import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("vella-user")) || {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      if (user?.accessToken) {
        localStorage.setItem("vella-user", JSON.stringify(user));
        state.value = user;
      }
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
