import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice";
import shopFilterReducer from "./slices/filter/shopSlice.js";
import cartReducer from "./slices/cartSlice.js";
import parlorFilterReducer from "./slices/filter/parlorSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    shop_filter: shopFilterReducer,
    parlor_filter: parlorFilterReducer,
    cart: cartReducer,
  },
});
