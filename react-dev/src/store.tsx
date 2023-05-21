import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart";
import modalReducer from "./features/Modalslice";
const store = configureStore({
    reducer: {
      cart: cartReducer,
      modal: modalReducer,
    },
})

export default store;
