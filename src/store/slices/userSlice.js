import { createSlice } from "@reduxjs/toolkit";

const defaultUser = {
    id: 300837,
    name: "Bob",
    surname: "Bobert",
    fullName: "Bob Bobert",
    email: "b0bert@gmail.com",
    phone: "+38(064)54-09-154",
    birthday: null,
    orders: [
        {
            id: 49068,
            date: "19:45 08/03/2024", // change to Date
            amount: 47,
            address: "Lviv, Chornovola st, 85/7",
            orderedProducts: [
                {
                    id: "croque-madame",
                    category: "breakfast",
                    amount: 1,
                },
                {
                    id: "crepes-suzette",
                    category: "breakfast",
                    amount: 1,
                },
            ],
        },
        {
            id: 84740,
            date: "19:55 03/01/2024", // change to Date
            amount: 94,
            address: "Khmelnytskyi, Chornovola st, 87/1",
            orderedProducts: [
                {
                    id: "croque-madame",
                    category: "breakfast",
                    amount: 2,
                },
                {
                    id: "crepes-suzette",
                    category: "breakfast",
                    amount: 2,
                },
            ],
        },
        {
            id: 72897,
            date: "19:45 08/11/2023", // change to Date
            amount: 141,
            address: "Lviv, Chornovola st, 87/1",
            orderedProducts: [
                {
                    id: "croque-madame",
                    category: "breakfast",
                    amount: 3,
                },
                {
                    id: "crepes-suzette",
                    category: "breakfast",
                    amount: 3,
                },
            ],
        },
    ],
    currentAddressId: "chornovola87/16",
    addresses: [
        {
            apartment: 7,
            city: "Lviv",
            entrance: 1,
            floor: 4,
            house: "85",
            id: "dzherelna85/7",
            intercom: null,
            street: "Dzherelna",
        },
        {
            apartment: null,
            city: "Khmelnytskyi",
            entrance: null,
            floor: null,
            house: "87",
            id: "chornovola87",
            intercom: null,
            street: "Chornovola",
        },
        {
            apartment: 16,
            city: "Lviv",
            entrance: 1,
            floor: 3,
            house: "87",
            id: "chornovola87/16",
            intercom: 87,
            street: "Chornovola",
        },
    ],
    reservationIds: [1, 4],
    tickets: [],
};

const userSlice = createSlice({
    name: "user",
    initialState: defaultUser,
    reducers: {
        addAddress(state, action) {
            state.addresses.push(action.payload);
        },
        addReservationId(state, action) {
            state.reservationIds.push(action.payload);
        },
        addTicket(state, action) {
            state.tickets.push(action.payload);
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
    addReservationId,
    addTicket,
    logOut,
    removeAddress,
    setCurrentAddress,
    updateUserData,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
