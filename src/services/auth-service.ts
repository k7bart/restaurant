import {
    AuthenticatedUser,
    LoginCredentials,
    Response,
    SignupRequest,
    User,
} from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const authService = {
    login: async (payload: LoginCredentials) => {
        const response = await axios.post<Response<AuthenticatedUser>>(
            "/auth/login",
            payload,
        );
        return response.data;
    },
    signup: async (payload: SignupRequest) => {
        const response = await axios.post<Response<AuthenticatedUser>>(
            "/auth/signup",
            payload,
        );
        return response.data;
    },
    getMe: async () => {
        const response = await axios.get<Response<AuthenticatedUser>>("/auth/me");
        return response.data;
    },
    updateMe: async (payload: Partial<User>) => {
        const response = await axios.patch<Response<AuthenticatedUser>>(
            "/auth/me",
            payload,
        );
        return response.data;
    },
    logout: () => axios.post<Response>("/auth/logout"),
};
