import PropTypes from "prop-types";

import Dropdown from "../../../components/dropdown/Dropdown";
import HorizontalDevider from "../../../components/horizontal-divider/HorizontalDevider";
import PaymentOptions from "../../../components/payment-options/PaymentOptions";

import { addresses } from "../../../../state";
import { SELF_PICKUP_PAYMENT_OPTIONS } from "../../../components/payment-options/paymentOptionsConstants";

const SelfPickupCheckout = ({
    handlePaymentMethod,
    handlePickupAddress,
    selectedOption,
}) => {
    return (
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
};

SelfPickupCheckout.propTypes = {
    handlePaymentMethod: PropTypes.func.isRequired,
    handlePickupAddress: PropTypes.func.isRequired,
    selectedOption: PropTypes.string.isRequired,
};

export default SelfPickupCheckout;
