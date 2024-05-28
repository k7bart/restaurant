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
        currentAddress: "Lviv, Chornovola st, 87/1",
        addresses: [
            "Lviv, Chornovola st, 85/7",
            "Khmelnytskyi, Chornovola st, 87/1",
            "Lviv, Chornovola st, 87/1",
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
        removeAddress(state, action) {
            state.addresses = state.addresses.filter(
                (address) => address !== action.payload
            );
        },
    },
});

export const { updateUserData, removeAddress } = userSlice.actions;
export const userReducer = userSlice.reducer;
