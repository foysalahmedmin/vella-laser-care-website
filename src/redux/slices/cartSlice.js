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
    as_profile: false,
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
    SetCartEmail: (state, action) => {
      state.email = action.payload;
    },
    SetCartName: (state, action) => {
      state.name = action.payload;
    },
    SetCartCity: (state, action) => {
      state.city = action.payload;
    },
    SetCartAddress: (state, action) => {
      state.address = action.payload;
    },
    SetCartPostal: (state, action) => {
      state.postal = action.payload;
    },
    SetCartPhone: (state, action) => {
      state.phone = action.payload;
    },
    SetCartPaymentMethod: (state, action) => {
      state.payment_method = action.payload;
    },
    ToggleAsProfile: (state, action) => {
      state.as_profile = !state.as_profile;
    },
    SetResetCart: (state, action) => {
      state.isOpen = false;
      state.products = [];
      state.email = "";
      state.name = "";
      state.city = "";
      state.address = "";
      state.postal = "";
      state.phone = "";
      state.as_profile = false;
      state.payment_method = "";
    },
  },
});
export const {
  ToggleCartIsOpen,
  SetCartProduct,
  SetCartProductQuantity,
  SetCartProductRemove,
  SetCartAddress,
  SetCartEmail,
  SetCartName,
  SetCartCity,
  SetCartPhone,
  SetCartPostal,
  SetCartPaymentMethod,
  ToggleAsProfile,
  SetResetCart,
} = cartFilter.actions;
export default cartFilter.reducer;
