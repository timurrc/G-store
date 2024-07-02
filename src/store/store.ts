import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productApi/Productapi";
import { cartReducer } from "./Cart/Cart.slice";
export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
export type TypeRootState = ReturnType<typeof store.getState>;
