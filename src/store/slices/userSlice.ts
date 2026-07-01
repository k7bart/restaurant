import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type {
    Address,
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
            state.addresses.push(action.payload);
        },
        addReservation(state, action: PayloadAction<Reservation>) {
            if (!state) return;
            state.reservations.push(action.payload);
        },
        addTicket(state, action: PayloadAction<Ticket>) {
            if (!state) return;
            state.tickets.push(action.payload);
        },
        logOut() {
            return null;
        },
        removeAddress(state, action: PayloadAction<Address["id"]>) {
            if (!state) return;
            const index = state.addresses.findIndex(
                (address) => address.id === action.payload
            );
            if (index === -1) return;
            state.addresses.splice(index, 1);
        },
        setCurrentAddress(state, action: PayloadAction<Address>) {
            if (!state) return;
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
    addReservation,
    addTicket,
    logOut,
    removeAddress,
    setCurrentAddress,
    updateUserData,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
