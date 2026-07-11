import type { Address, Response } from "@k7bart/restaurant-shared-types";
import axios from "../api/axios";

export const addressService = {
    addAddress: async (address: Omit<Address, "id"> & { id?: string }) => {
        const response = await axios.post<Response<Address>>(
            "/auth/me/addresses",
            address,
        );
        return response.data;
    },
    updateAddress: async (addressId: string, updates: Partial<Address>) => {
        const response = await axios.patch<Response<Address>>(
            `/auth/me/addresses/${addressId}`,
            updates,
        );
        return response.data;
    },
    deleteAddress: async (addressId: string) => {
        const response = await axios.delete<Response<Address[]>>(
            `/auth/me/addresses/${addressId}`,
        );
        return response.data;
    },
};
