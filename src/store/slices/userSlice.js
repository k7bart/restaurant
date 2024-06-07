import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Bob",
        surname: "Bobert",
        email: "b0bert@gmail.com",
        phone: "+38(064)54-09-154",
        birthday: null,
        orders: [
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
        ],
        currentAddressId: "chornovola87/16",
        addresses: [
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
        ],
    },
    reducers: {
        updateUserData(state, action) {
            const { name, surname, email, phone, birthday } = action.payload;
            state.name = name;
            state.surname = surname;
            state.email = email;
            state.phone = phone;
            state.birthday = birthday;
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
