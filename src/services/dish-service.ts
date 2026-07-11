import axios from "../api/axios";
import type { Response, Dish } from "@k7bart/restaurant-shared-types";

export const dishService = {
    getDish: async (dishId: string) => {
        const response = await axios.get<Response<Dish>>(`/dishes/${dishId}`);
        return response.data;
    },
};
