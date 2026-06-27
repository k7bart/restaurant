import type { Address } from "@k7bart/restaurant-shared-types";

type AddressFields = Pick<
    Address,
    "city" | "street" | "house" | "entrance" | "floor" | "apartment" | "intercom"
>;

const getAddressDefaultValues = (currentAddress: Partial<AddressFields> = {}) => {
    const {
        city = "",
        street = "",
        house = "",
        entrance = "",
        floor = "",
        apartment = "",
        intercom = "",
    } = currentAddress;

    return { city, street, house, entrance, floor, apartment, intercom };
};

export default getAddressDefaultValues;
