import cn from "classnames";
import styles from "./TotalPrice.module.scss";

type Props = {
    additionalStyles?: string;
    price: number;
};

const TotalPrice = ({ additionalStyles, price }: Props) => (
    <div className={cn(styles.container, additionalStyles)}>
        <h4>Total: $</h4>
        <h4 className={styles.price}>{price.toFixed(2)}</h4>
    </div>
);

export default TotalPrice;
