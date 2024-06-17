import { createSlice } from "@reduxjs/toolkit";
import User from "../../models/User";

const defaultUser = new User(
    "Bob",
    "Bobert",
    "b0bert@gmail.com",
    "+38(064)54-09-154"
);

defaultUser.orders = [
    {
        id: 49068,
        date: "19:45 08/03/2024", // change to Date
        price: 48,
        address: "Lviv, Chornovola st, 85/7",
    },
    {
        id: 84740,
        date: "19:55 03/01/2024", // change to Date
        price: 64,
        address: "Khmelnytskyi, Chornovola st, 87/1",
    },
    {
        id: 72897,
        date: "19:45 08/11/2023", // change to Date
        price: 28,
        address: "Lviv, Chornovola st, 87/1",
    },
];
defaultUser.currentAddressId = "chornovola87/16";
defaultUser.addresses = [
    {
        apartment: 7,
        city: "Lviv",
        entrance: 1,
        floor: 4,
        house: 85,
        id: "dzherelna85/7",
        intercom: null,
        street: "Dzherelna",
    },
    {
        apartment: null,
        city: "Khmelnytskyi",
        entrance: null,
        floor: null,
        house: 87,
        id: "chornovola87",
        intercom: null,
        street: "Chornovola",
    },
    {
        apartment: 16,
        city: "Lviv",
        entrance: 1,
        floor: 3,
        house: 87,
        id: "chornovola87/16",
        intercom: 87,
        street: "Chornovola",
    },
];

const userSlice = createSlice({
    name: "user",
    initialState: defaultUser,
    reducers: {
        addAddress(state, action) {
            state.addresses.push(action.payload);
        },
        logOut() {
            return null;
        },
        removeAddress(state, action) {
            state.addresses.splice(
                state.addresses.findIndex(
                    (address) => address.id === action.payload
                ),
                1
            );
        },
        setCurrentAddress(state, action) {
            state.currentAddressId = action.payload;
        },
        updateUserData(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const {
    addAddress,
    logOut,
    removeAddress,
    setCurrentAddress,
    updateUserData,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
