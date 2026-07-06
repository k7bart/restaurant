import {
    LoginCredentials,
    Response,
    SignupRequest,
    User,
} from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const authService = {
    login: async (payload: LoginCredentials) => {
        const response = await axios.post<Response<User>>(
            "/auth/login",
            payload,
        );
        return response.data;
    },
    signup: async (payload: SignupRequest) => {
        const response = await axios.post<Response<User>>(
            "/auth/signup",
            payload,
        );
        return response.data;
    },
    getMe: async () => {
        const response = await axios.get<Response<User>>("/auth/me");
        return response.data;
    },
    updateMe: async (payload: Partial<User>) => {
        const response = await axios.patch<Response<User>>("/auth/me", payload);
        return response.data;
    },
    logout: () => axios.post("/auth/logout"),
};
