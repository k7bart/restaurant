import PropTypes from "prop-types";
import NumInput from "../../../../../components/Inputs/NumInput/NumInput";

const Amount = ({ amount, onChange }) => {
    return (
        <div onClick={(e) => e.preventDefault()}>
            <NumInput amount={amount} min={0} onChange={onChange} />
        </div>
    );
};
Amount.propTypes = {
    amount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Amount;
