import { configureStore } from "@reduxjs/toolkit";
import {
    cartReducer,
    addProduct,
    updateProductAmount,
    removeProduct,
    reset,
} from "./slices/cartSlice";
import {
    userReducer,
    addAddress,
    logOut,
    removeAddress,
    setCurrentAddress,
    updateUserData,
} from "./slices/userSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
});

export { store };
export {
    addProduct,
    updateProductAmount,
    removeProduct,
    reset,
    updateUserData,
    addAddress,
    logOut,
    removeAddress,
    setCurrentAddress,
};
