import { type Event, type Response } from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const eventService = {
    getEvents: async () => {
        const response = await axios.get<Response<Event[]>>("/events");
        return response.data;
    },
    getEventByPathName: async (pathName: string) => {
        const response = await axios.get<Response<Event>>(
            `/events/pathName/${pathName}`,
        );
        return response.data;
    },
};
