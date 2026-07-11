import type { Category, Response } from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const menuService = {
    getMenu: async () => {
        const response = await axios.get<Response<Category[]>>("/menu");
        return response.data;
    },
};
