import { getPriceWithDiscount } from "../../../../../../../utils/priceUtils";
import styles from "./Price.module.scss";

type Props = {
    discountPercent?: number;
    price: number;
};

const Price = ({ discountPercent, price }: Props) => (
    <div className={styles.price}>
        {discountPercent && (
            <h4 className={styles.sale}>{"$" + price.toFixed(2)}</h4>
        )}
        <h4>
            {"$" + discountPercent
                ? getPriceWithDiscount(price, discountPercent).toFixed(2)
                : price}
        </h4>
    </div>
);

export default Price;
