import { Response, SignupRequest, User } from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const authService = {
    signup: async (payload: SignupRequest) => {
        const response = await axios.post<Response<User>>(
            "/auth/signup",
            payload,
        );
        return response.data;
    },
    getMe: () => axios.get<Response<User>>("/auth/me"),
    updateMe: async (payload: Partial<User>) => {
        const response = await axios.patch<Response<User>>("/auth/me", payload);
        return response.data;
    },
    logout: () => axios.post("/auth/logout"),
};
