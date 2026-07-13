import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type {
    Address,
    Order,
    Reservation,
    User,
    Ticket,
} from "@k7bart/restaurant-shared-types";

const userSlice = createSlice({
    name: "user",
    initialState: null as User | null,
    reducers: {
        setUser(_state, action: PayloadAction<User>) {
            return action.payload;
        },
        addAddress(state, action: PayloadAction<Address>) {
            if (!state) return;
            if (!state.addresses) state.addresses = [];
            state.addresses.push(action.payload);
        },
        addOrder(state, action: PayloadAction<Order>) {
            if (!state) return;
            if (!state.orders) state.orders = [];
            state.orders.push(action.payload);
        },
        addReservation(state, action: PayloadAction<Reservation>) {
            if (!state) return;
            if (!state.reservations) state.reservations = [];
            state.reservations.push(action.payload);
        },
        addTicket(state, action: PayloadAction<Ticket>) {
            if (!state) return;
            if (!state.tickets) state.tickets = [];
            state.tickets.push(action.payload);
        },
        logOut() {
            return null;
        },
        setCurrentAddress(state, action: PayloadAction<Address>) {
            if (!state?.addresses) return;
            state.addresses.forEach((address) => {
                address.isCurrent = address.id === action.payload.id;
            });
        },
        updateUserData(state, action: PayloadAction<Partial<User>>) {
            if (!state) return;
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const {
    setUser,
    addAddress,
    addOrder,
    addReservation,
    addTicket,
    logOut,
    setCurrentAddress,
    updateUserData,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
