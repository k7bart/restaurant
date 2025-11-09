import { Address } from "@k7bart/restaurant-shared-types";

const addressToStr = (address: Address) => {
    return `${address.city}, ${address.street} ${address.house}${
        address.apartment && "/" + address.apartment
    }`;
};

export { addressToStr };
