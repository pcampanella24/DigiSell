import { configureStore } from "@reduxjs/toolkit";
import carReducer from './cars';
import cartReducer from './cart'

export const store = configureStore({
    reducer: { 
        car: carReducer,
        cart: cartReducer
    }
});

export default store;