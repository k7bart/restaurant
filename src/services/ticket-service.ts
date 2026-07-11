import type {
    Response,
    Ticket,
    TicketRequest,
} from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const ticketService = {
    createTicket: async (payload: TicketRequest) => {
        const response = await axios.post<Response<Ticket>>(
            "/tickets",
            payload,
        );
        return response.data;
    },
};
