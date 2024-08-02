import { useSelector, useDispatch } from "react-redux";
import { getTotalDiscount, getTotalPrice } from "../../../../utils/priceUtils";
import { reset } from "../../../../store/index";
import ProductPreview from "../ProductPreview/ProductPreview";
import Button from "../../../Button/Button";
import styles from "./Cart.module.scss";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalDiscount = cart
        .filter((product) => product.discountPercent !== null)
        .reduce(
            (total, { price, discountPercent, amount }) =>
                total + getTotalDiscount(price, discountPercent, amount),
            0
        )
        .toFixed(2); // returns string

    const total = cart
        .reduce(
            (total, { price, discountPercent, amount }) =>
                total + getTotalPrice(price, discountPercent, amount),
            0
        )
        .toFixed(2); // returns string

    return (
        <div className={styles.cart}>
            <Button
                size="small"
                color="wisteria"
                text="Empty cart"
                onClick={() => dispatch(reset())}
            />
            <ul className={styles.products}>
                {cart.map((product) => (
                    <ProductPreview key={product.id} product={product} />
                ))}
            </ul>
            <div className={styles.pricesContainer}>
                <h4>Shipping: $0.00</h4>
                <div>
                    <h4>Discount: $</h4>
                    <h4>{totalDiscount}</h4>
                </div>
                <div>
                    <h4>Total: $</h4>
                    <h4 className={styles.price}>{total}</h4>
                </div>
            </div>
            <Button size="large" color="wisteria" text="Complete the order" />
        </div>
    );
};

export default Cart;
