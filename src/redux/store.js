import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice";
import shopFilterReducer from "./slices/filter/shopSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    shop_filter: shopFilterReducer,
  },
});
