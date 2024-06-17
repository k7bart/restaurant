import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
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
defaultUser.reservations = [
    {
        date: "2024-10-15T21:00:00.000Z",
        time: "18:00",
        reservedBy: 300837,
        guests: {
            adults: 4,
            children: 2,
        },
        additionalRequirements: "Please sing Happy Birthday 🎂",
    },
    {
        date: "2022-03-14T21:00:00.000Z",
        time: "15:00",
        reservedBy: 300837,
        guests: {
            adults: 2,
            children: 0,
        },
        additionalRequirements: "I'm going to propose 💍",
    },
    {
        date: dayjs(),
        time: "12:00",
        reservedBy: 300837,
        guests: {
            adults: 2,
            children: 1,
        },
        additionalRequirements: "Baby highchair 🧒",
    },
];

const userSlice = createSlice({
    name: "user",
    initialState: defaultUser,
    reducers: {
        updateUserData(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
        addAddress(state, action) {
            state.addresses.push(action.payload);
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
    },
});

export const { updateUserData, addAddress, removeAddress, setCurrentAddress } =
    userSlice.actions;
export const userReducer = userSlice.reducer;
