import axios from "../api/axios";

export const eventService = {
    getEvents: () => {
        return axios.get("/events");
    },
    getEventByPathName: (pathName: string) => {
        return axios.get(`/events/pathName/${pathName}`);
    },
};
