import axios from "axios";
import {
    createAsyncThunk,
    createSlice,
    isFulfilled,
    isPending,
    isRejected,
} from "@reduxjs/toolkit";

export const fetchReservations = createAsyncThunk(
    "reservations/fetchReservations",
    async () => {
        const { data } = await axios.get("/api/reservations");
        return data;
    }
);

export const addReservation = createAsyncThunk(
    "reservations/addReservation",
    async (reservationObj) => {
        const { data } = await axios.post("/api/reservations", reservationObj);
        return data;
    }
);

const initialState = {
    list: [
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
    ],
    status: "idle",
    error: null,
};

const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReservations.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(addReservation.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addMatcher(
                isPending(fetchReservations, addReservation),
                (state) => {
                    state.status = "loading";
                    state.error = null;
                }
            )
            .addMatcher(
                isFulfilled(fetchReservations, addReservation),
                (state) => {
                    state.status = "succeeded";
                }
            )
            .addMatcher(
                isRejected(fetchReservations, addReservation),
                (state, action) => {
                    state.status = "failed";
                    state.error = action.error.message;
                }
            );
    },
});

export const reservationsReducer = reservationsSlice.reducer;
