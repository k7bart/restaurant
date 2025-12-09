import Dropdown from "../../../components/dropdown/Dropdown";
import HorizontalDevider from "../../../components/horizontal-divider/HorizontalDevider";
import PaymentOptions from "../../../components/payment-options/PaymentOptions";

import { addresses } from "../../../../state";
import { SELF_PICKUP_PAYMENT_OPTIONS } from "../../../components/payment-options/paymentOptionsConstants";

import type { PaymentMethod } from "@k7bart/restaurant-shared-types";

type Props = {
    handlePaymentMethod: (method: PaymentMethod) => void;
    handlePickupAddress: (address: { id: string; text: string }) => void;
    selectedOption: PaymentMethod;
};

const SelfPickupCheckout = ({
    handlePaymentMethod,
    handlePickupAddress,
    selectedOption,
}: Props) => (
    <>
        <Dropdown
            label="Pickup address*"
            onSelect={handlePickupAddress}
            options={addresses}
        />

        <HorizontalDevider />

        <PaymentOptions
            onClick={handlePaymentMethod}
            options={SELF_PICKUP_PAYMENT_OPTIONS}
            selectedOption={selectedOption}
        />
    </>
);

export default SelfPickupCheckout;
