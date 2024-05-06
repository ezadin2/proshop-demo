import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal', itemsPrice: 0, shippingPrice: 0, taxPrice: 0, totalPrice: 0 };


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems.push(item);
      }
      // Calculate prices
      state.itemsPrice = state.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
      state.shippingPrice = // Calculate shipping price here
      state.taxPrice = // Calculate tax price here
      state.totalPrice = state.itemsPrice + state.shippingPrice + state.taxPrice;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    clearCartItems: (state,action) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod,clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;
