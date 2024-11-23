import PropTypes from "prop-types";
import styles from "./Discount.module.scss";

const Discount = ({ discountPercent }) => {
    return <div className={styles.discount}>{`-${discountPercent}%`}</div>;
};

Discount.propTypes = {
    discountPercent: PropTypes.number.isRequired,
};

export default Discount;
