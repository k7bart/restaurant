import PropTypes from "prop-types";

import NumInput from "../../../components/Inputs/NumInput/NumInput";

import styles from "./Amount.module.scss";

const Amount = ({ amount, onChange }) => {
    return (
        <div className={styles.amount}>
            <NumInput amount={amount} min={0} onChange={onChange} />
        </div>
    );
};

Amount.propTypes = {
    amount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Amount;
