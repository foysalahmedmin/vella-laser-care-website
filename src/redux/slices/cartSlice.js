import { createSlice } from "@reduxjs/toolkit";

export const cartFilter = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    products: [],
    email: "",
    name: "",
    city: "",
    address: "",
    postal: "",
    phone: "",
    payment_method: "",
  },
  reducers: {
    ToggleCartIsOpen: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    SetCartProduct: (state, action) => {
      const isAdded = state.products?.some(
        (x) => x?._id === action.payload?._id,
      );
      if (!isAdded) {
        state.products = [...state.products, action.payload];
      }
    },
    SetCartProductQuantity: (state, action) => {
      state.products = action.payload;
    },
    SetCartProductRemove: (state, action) => {
      state.products = state.products?.filter(
        (x) => x?._id !== action.payload?._id,
      );
    },
  },
});
export const {
  ToggleCartIsOpen,
  SetCartProduct,
  SetCartProductQuantity,
  SetCartProductRemove,
} = cartFilter.actions;
export default cartFilter.reducer;
