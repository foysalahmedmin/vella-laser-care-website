import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice";
import shopFilterReducer from "./slices/filter/shopSlice.js";
import cartReducer from "./slices/cartSlice.js";
import parlorFilterReducer from "./slices/filter/parlorSlice.js";
import serviceFilterReducer from "./slices/filter/serviceSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    shop_filter: shopFilterReducer,
    parlor_filter: parlorFilterReducer,
    service_filter: serviceFilterReducer,
    cart: cartReducer,
  },
});
