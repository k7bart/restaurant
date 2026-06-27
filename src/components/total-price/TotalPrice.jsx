import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./TotalPrice.module.scss";

const TotalPrice = ({ additionalStyles, price }) => {
    return (
        <div className={classNames(styles.container, additionalStyles)}>
            <h4>Total: $</h4>
            <h4 className={styles.price}>{price.toFixed(2)}</h4>
        </div>
    );
};

TotalPrice.propTypes = {
    additionalStyles: PropTypes.string,
    price: PropTypes.number.isRequired,
};

export default TotalPrice;
