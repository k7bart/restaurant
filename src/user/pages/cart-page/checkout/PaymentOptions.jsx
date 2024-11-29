import PropTypes from "prop-types";

import OptionsButtons from "../../../components/options-buttons/OptionsButtons";

const PAYMENT_LABEL = "Payment method";
const PAYMENT_OPTIONS = [
    { option: "cash", label: "Cash" },
    { option: "online", label: "Online" },
    { option: "card", label: "To courier by card" },
];

const PaymentOptions = ({ selectedOption, onChange }) => (
    <OptionsButtons
        label={PAYMENT_LABEL}
        onChange={onChange}
        options={PAYMENT_OPTIONS}
        selectedOption={selectedOption}
    />
);
PaymentOptions.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default PaymentOptions;
