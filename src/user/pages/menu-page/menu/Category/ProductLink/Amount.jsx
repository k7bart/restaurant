import PropTypes from "prop-types";
import classNames from "classnames";
import { useProductInCart } from "../../../../../../hooks/useProductInCart";
import NumInput from "../../../../../components/Inputs/NumInput/NumInput";
import styles from "./ProductLink.module.scss";

const Amount = ({ product, category }) => {
    const { amount, handleAmountChange } = useProductInCart(product, category);

    return (
        <div
            className={classNames(styles.amount, {
                [styles.visible]: amount,
            })}
            onClick={(e) => e.preventDefault()}
        >
            {amount ? (
                <div>
                    <NumInput
                        amount={amount}
                        min={0}
                        onChange={handleAmountChange}
                    />
                </div>
            ) : (
                <button onClick={() => handleAmountChange(1)}>
                    Add to cart
                </button>
            )}
        </div>
    );
};
Amount.propTypes = {
    product: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
};

export default Amount;
