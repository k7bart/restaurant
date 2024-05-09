import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Bob",
        surname: "Bobert",
        phone: "+38(064)54-09-154",
        date: "30.02.1995",
        orders: [
            {
                id: 49068,
                date: "19:45 08/03/2024", // change to Date
                price: 48,
                address: "Lviv, Chornovola st, 87/1",
            },
            {
                id: 84740,
                date: "19:55 03/01/2024", // change to Date
                price: 64,
                address: "Lviv, Chornovola st, 87/1",
            },
            {
                id: 72897,
                date: "19:45 08/11/2023", // change to Date
                price: 28,
                address: "Lviv, Chornovola st, 87/1",
            },
        ],
    },
    reducers: {},
});

// export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
