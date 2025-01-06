import axios from "../api/axios";

export const eventService = {
    getEvents: () => {
        return axios.get("/events");
    },
    getEventByName: (name) => {
        return axios.get(`/events/name/${name}`);
    },
};
