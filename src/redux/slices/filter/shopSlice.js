import { createSlice } from "@reduxjs/toolkit";

export const shopFilter = createSlice({
  name: "shop_filter",
  initialState: {
    category: "",
    sub_category: "",
    min_price: 0,
    max_price: 0,
    skin_type: "",
    skin_concern: "",
  },
  reducers: {
    SetShopFilterCategory: (state, action) => {
      state.category = action.payload;
    },
    SetShopFilterSubCategory: (state, action) => {
      state.sub_category = action.payload;
    },
    SetShopFilterMinPrice: (state, action) => {
      state.min_price = action.payload;
    },
    SetShopFilterMaxPrice: (state, action) => {
      state.max_price = action.payload;
    },
    SetShopFilterSkinType: (state, action) => {
      state.skin_type = action.payload;
    },
    SetShopFilterSkinConcern: (state, action) => {
      state.skin_concern = action.payload;
    },
  },
});
export const {
  SetShopFilterMaxPrice,
  SetShopFilterSkinType,
  SetShopFilterMinPrice,
  SetShopFilterCategory,
  SetShopFilterSkinConcern,
  SetShopFilterSubCategory,
} = shopFilter.actions;
export default shopFilter.reducer;
