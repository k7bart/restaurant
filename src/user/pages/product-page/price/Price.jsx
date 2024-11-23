import { getPrice, getTotalPrice } from "../../../../utils/priceUtils";
import PropTypes from "prop-types";

import styles from "./Price.module.scss";

const Price = ({ amount, discountPercent, price }) => {
    return (
        <>
            <h4>$</h4>
            <h3 className={styles.price}>
                {amount
                    ? getTotalPrice(price, discountPercent, amount).toFixed(2)
                    : getPrice(price, discountPercent).toFixed(2)}
            </h3>
        </>
    );
};
Price.propTypes = {
    amount: PropTypes.number.isRequired,
    discountPercent: PropTypes.number,
    price: PropTypes.number.isRequired,
};

export default Price;
