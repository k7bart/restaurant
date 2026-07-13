import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { userReducer } from "./slices/userSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
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
    addOrder,
    addReservation,
    addTicket,
    logOut,
    setCurrentAddress,
    updateUserData,
} from "./slices/userSlice";

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
