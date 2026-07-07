import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { userReducer } from "./slices/userSlice";
import { reservationsReducer } from "./slices/reservationsSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        reservations: reservationsReducer,
    },
});

export { store };

export {
    addToCart,
    updateAmountInCart,
    removeFromCart,
    resetCart,
} from "./slices/cartSlice";

export {
    setUser,
    addAddress,
    addReservation,
    addTicket,
    logOut,
    removeAddress,
    setCurrentAddress,
    updateUserData,
} from "./slices/userSlice";

export { fetchReservations } from "./slices/reservationsSlice";

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
