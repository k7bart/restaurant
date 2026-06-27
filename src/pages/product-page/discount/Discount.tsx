import styles from "./Discount.module.scss";

const Discount = ({ discountPercent }: { discountPercent: number }) => (
    <div className={styles.discount}>{`-${discountPercent}%`}</div>
);

export default Discount;
