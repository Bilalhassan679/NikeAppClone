import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export default cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.products;
      const cartitem = state.items.find(
        (item) => item.products.id === newProduct.id
      );
      if (cartitem) {
        cartitem.quantity = cartitem.quantity + 1;
      } else {
        state.items.push({ products: newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productsId, add } = action.payload;
      const cartItem = state.items.find(
        (item) => item.products.id === productsId
      );
      if (cartItem) {
        cartItem.quantity += add;
      }
      if (cartItem?.quantity <= 0) {
        state.items = state.items.filter((item) => item !== cartItem);
      }
    },
  },
});

export const cartItemLength = (state) => state.cart.items.length;
export const subItemsTotal = (state) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.products.price * cartItem.quantity,
    0
  );

const cartSelector = (state) => state.cart;
export const selectDeliveryPrice = createSelector(
  cartSelector,
  subItemsTotal,
  (cart, subtotal) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const totalPrice = createSelector(
  subItemsTotal,
  selectDeliveryPrice,
  (sbTotal, deliveryTotal) => sbTotal + deliveryTotal
);
