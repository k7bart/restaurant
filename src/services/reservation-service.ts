import {
    Reservation,
    ReservationRequest,
    Response,
} from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const reservationService = {
    createReservation: async (reservation: ReservationRequest) => {
        const response = await axios.post<Response<Reservation>>(
            "/reservations",
            reservation,
        );
        return response.data;
    },
};
