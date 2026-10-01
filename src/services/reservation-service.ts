import {
    Reservation,
    ReservationRequest,
    Response,
} from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const reservationService = {
    createReservation: async (reservation: ReservationRequest) => {
        const { data: body } = await axios.post<Response<Reservation>>(
            "/reservations",
            reservation,
        );
        if (!body.data) return body;

        return {
            ...body,
            data: { ...body.data, id: String(body.data.id) },
        };
    },
};
