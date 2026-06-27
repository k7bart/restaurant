import PropTypes from "prop-types";

import OptionsButtons from "../options-buttons/OptionsButtons";

const PaymentOptions = ({ onClick, options, selectedOption }) => (
    <OptionsButtons
        label="Payment method"
        onClick={onClick}
        options={options}
        selectedOption={selectedOption}
    />
);

PaymentOptions.propTypes = {
    onClick: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            option: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    selectedOption: PropTypes.string.isRequired,
};

export default PaymentOptions;
