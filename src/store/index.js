import { configureStore } from "@reduxjs/toolkit";
import {
    cartReducer,
    addProduct,
    updateProductAmount,
    removeProduct,
    reset,
} from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export { store };
export { addProduct, updateProductAmount, removeProduct, reset };
