import { createSlice } from "@reduxjs/toolkit";

const reservations = [
    {
        id: 1,
        dateTime: "2023-10-15T18:00:00+03:00",
        code: "T1",
        status: "done",
        reservedBy: {
            id: 300837,
            name: "Bob Bobert",
            phone: "+380645409154",
            email: "b0bert@gmail.com",
            isRegistered: true,
        },
        guests: {
            adults: 4,
            children: 2,
        },
        additionalRequirements: "Please sing Happy Birthday 🎂",
    },
    {
        id: 2,
        dateTime: "2023-10-16T15:00:00+03:00",
        code: "W1",
        status: "done",
        reservedBy: {
            id: 300838,
            name: "Alice Johnson",
            phone: "+380635632914",
            email: "alice.johnson@example.com",
            isRegistered: true,
        },
        guests: {
            adults: 2,
            children: 0,
        },
        additionalRequirements: null,
    },
    {
        id: 3,
        dateTime: "2023-10-16T17:00:00+03:00",
        code: "T2",
        status: "cancelled",
        reservedBy: {
            id: 300839,
            name: "Charlie",
            phone: "+380635309155",
            email: null,
            isRegistered: false,
        },
        guests: {
            adults: 2,
            children: 1,
        },
        additionalRequirements: null,
    },
    {
        id: 4,
        dateTime: "2023-10-17T18:00:00+03:00",
        code: "T1",
        status: "confirmed",
        reservedBy: {
            id: 300837,
            name: "Bob Bobert",
            phone: "+380645409154",
            email: "b0bert@gmail.com",
            isRegistered: true,
        },
        guests: {
            adults: 2,
            children: 0,
        },
        additionalRequirements: "I'm going to propose 💍",
    },
    {
        id: 5,
        dateTime: "2023-10-19T15:00:00+03:00",
        code: "W2",
        status: "new",
        reservedBy: {
            id: 300840,
            name: "David Smith",
            phone: "+380635309156",
            email: "david.smith@example.com",
            isRegistered: true,
        },
        guests: {
            adults: 2,
            children: 1,
        },
        additionalRequirements: "Baby highchair 🧒",
    },
];

const reservationsSlice = createSlice({
    name: "reservations",
    initialState: reservations,
    reducers: {
        addReservation(state, action) {
            state.push(action.payload);
        },
    },
});

export const { addReservation } = reservationsSlice.actions;
export const reservationsReducer = reservationsSlice.reducer;
