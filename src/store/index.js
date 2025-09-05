import { configureStore } from "@reduxjs/toolkit";
import {
    cartReducer,
    addProductToCart,
    updateProductAmountInCart,
    removeProductFromCart,
    resetCart,
} from "./slices/cartSlice";
import {
    userReducer,
    addAddress,
    addReservationId,
    addTicket,
    logOut,
    removeAddress,
    setCurrentAddress,
    updateUserData,
} from "./slices/userSlice";
import {
    reservationsReducer,
    addReservation,
} from "./slices/reservationsSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        reservations: reservationsReducer,
    },
});

export { store };
export {
    addProductToCart,
    updateProductAmountInCart,
    removeProductFromCart,
    resetCart,
    updateUserData,
    addAddress,
    addReservationId,
    addTicket,
    logOut,
    removeAddress,
    setCurrentAddress,
    addReservation,
};
