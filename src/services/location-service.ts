import type { Address, Response } from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const locationService = {
    getLocations: async () => {
        const response = await axios.get<Response<Address[]>>("/locations");
        return response.data;
    },
};
