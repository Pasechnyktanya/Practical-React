import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui_slice";
import cartReducer from "./cart_slice"

const store = configureStore({
  reducers: {
    ui: uiReducer.reducer,
    cart: cartReducer.reducer,
  }
});

export default store;
