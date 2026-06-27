import { getPrice, getTotalPrice } from "../../../utils/priceUtils";

import styles from "./Price.module.scss";

interface Props {
    amount: number;
    discountPercent?: number;
    price: number;
}

const Price = ({ amount, discountPercent, price }: Props) => (
    <>
        <h4>$</h4>
        <h3 className={styles.price}>
            {amount
                ? getTotalPrice(price, discountPercent, amount).toFixed(2)
                : getPrice(price, discountPercent).toFixed(2)}
        </h3>
    </>
);

export default Price;
