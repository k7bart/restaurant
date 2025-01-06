import axios from "../api/axios";

export const eventService = {
    getEvents: () => {
        return axios.get("/events");
    },
};
