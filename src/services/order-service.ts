import {
    type Order,
    type OrderRequest,
    type Response,
} from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const orderService = {
    createOrder: async (order: OrderRequest) => {
        const response = await axios.post<Response<Order>>("/orders", order);
        return response.data;
    },
};
