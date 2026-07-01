import Dropdown from "../../../components/dropdown/Dropdown";
import HorizontalDevider from "../../../components/horizontal-divider/HorizontalDevider";
import PaymentOptions from "../../../components/payment-options/PaymentOptions";

import { addresses } from "../../../state";
import { SELF_PICKUP_PAYMENT_OPTIONS } from "../../../components/payment-options/paymentOptionsConstants";

import type { Address, PaymentMethod } from "@k7bart/restaurant-shared-types";

type AddressRow =
    `${Address["city"]}, ${Address["street"]} ${Address["house"]}${Address["apartment"] extends string ? `/${Address["apartment"]}` : ""}`;

const formatAddressToString = (address: Address): AddressRow => {
    return `${address.city}, ${address.street} ${address.house}${address.apartment ? "/" + address.apartment : ""}`;
};

type Props = {
    handlePaymentMethod: (method: PaymentMethod) => void;
    handlePickupAddressId: (addressId: Address["id"]) => void;
    selectedOption: PaymentMethod;
};

const SelfPickupCheckout = ({
    handlePaymentMethod,
    handlePickupAddressId,
    selectedOption,
}: Props) => {
    const addressesOptions = addresses.map((address) => ({
        id: address.id,
        label: formatAddressToString(address),
        value: address.id,
    }));

    return (
        <>
            <Dropdown
                label="Pickup address*"
                onSelect={(option) => handlePickupAddressId(option.id)}
                options={addressesOptions}
            />

            <HorizontalDevider />

            <PaymentOptions
                onClick={(value) =>
                    handlePaymentMethod(value as PaymentMethod)
                }
                options={SELF_PICKUP_PAYMENT_OPTIONS}
                selectedOption={selectedOption}
            />
        </>
    );
};

export default SelfPickupCheckout;
