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
} from "./slices/tableReservationsSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        reservations: reservationsReducer,
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
    addReservationId,
    addTicket,
    logOut,
    removeAddress,
    setCurrentAddress,
    addReservation,
};
