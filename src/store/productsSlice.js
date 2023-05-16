import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  products: products,
  setSelectedProducts: null,
};
export default productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setSelectedProducts: (state, action) => {
      const { payload } = action;
      state.setSelectedProducts = state.products.find(
        (item) => item.id === payload
      );
    },
  },
});
