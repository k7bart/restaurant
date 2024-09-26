import PropTypes from "prop-types";
import styles from "./Price.module.scss";
import { getPriceWithDiscount } from "../../../../../../../utils/priceUtils";

const Price = ({ discountPercent, price }) => {
    const priceWithDiscount = getPriceWithDiscount(price, discountPercent);

    return (
        <div className={styles.price}>
            {discountPercent && (
                <h4 className={styles.sale}>
                    {"$" + priceWithDiscount.toFixed(2)}
                </h4>
            )}
            <h4>{"$" + price}</h4>
        </div>
    );
};

Price.propTypes = {
    discountPercent: PropTypes.number,
    price: PropTypes.number.isRequired,
};

export default Price;
