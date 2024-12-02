import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    getTotalDiscount,
    getTotalOrderPrice,
} from "../../../../utils/priceUtils";
import { reset } from "../../../../store/index";

import Button from "../../../../common/components/buttons/Button/Button";
import ContentSection from "../../../components/page-sructure/ContentSection/ContentSection";
import LinkComponent from "../../../components/links/LinkComponent/LinkComponent";
import ProductPreview from "../ProductPreview/ProductPreview";
import Text from "../../../components/Text/Text";
import TotalPrice from "../../../components/total-price/TotalPrice";

import styles from "./Cart.module.scss";

const header = {
    title: "You're ordering",
    text: "We deliver within the city and guarantee delivery within an hour, ensuring your meal arrives fresh and right on time.",
};
const emptyCartHeader = {
    title: "Place your order",
    text: "We deliver within the city and guarantee delivery within an hour, ensuring your meal arrives fresh and right on time.",
};

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const isCartEmpty = cart.length === 0;
    const dispatch = useDispatch();

    const totalDiscount = cart
        .filter((product) => product.discountPercent !== null)
        .reduce(
            (total, { price, discountPercent, amount }) =>
                total + getTotalDiscount(price, discountPercent, amount),
            0
        )
        .toFixed(2); // returns string

    const total = getTotalOrderPrice(cart);

    return (
        <ContentSection header={isCartEmpty ? emptyCartHeader : header}>
            {isCartEmpty ? (
                <Text size="large">
                    Your cart is empty, but we are eagerly awaiting your order!
                    You can checkout our menu&nbsp;
                    <LinkComponent color="wisteria" to="/menu" size="large">
                        here
                    </LinkComponent>
                </Text>
            ) : (
                <div className={styles.cart}>
                    <Button onClick={() => dispatch(reset())}>
                        Empty cart
                    </Button>
                    <ul className={styles.products}>
                        {cart.map((product) => (
                            <ProductPreview
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </ul>
                    <div className={styles.pricesContainer}>
                        <h4>Shipping: $0.00</h4>
                        <div>
                            <h4>Discount: $</h4>
                            <h4>{totalDiscount}</h4>
                        </div>

                        <TotalPrice price={total} />
                    </div>
                    <Link to="/cart/checkout">
                        <Button size="large">Checkout</Button>
                    </Link>
                </div>
            )}
        </ContentSection>
    );
};

export default Cart;
