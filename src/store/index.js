import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productsSlice";
import cartSlice from "./cartSlice";
export default store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    cart: cartSlice.reducer,
  },
});
