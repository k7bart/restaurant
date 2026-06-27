import { Link } from "react-router-dom";
import {
    getTotalDiscount,
    getTotalOrderPrice,
} from "../../../utils/priceUtils";
import { resetCart } from "../../../store";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import Button from "../../../components/buttons/Button/Button";
import ContentSection from "../../../components/page-sructure/ContentSection/ContentSection";
import CustomLink from "../../../components/links/custom-link/CustomLink";
import ProductPreview from "../dish-preview/DishPreview";
import Text from "../../../components/text/Text";
import TotalPrice from "../../../components/total-price/TotalPrice";

import styles from "./Cart.module.scss";

const Cart = () => {
    const cart = useAppSelector((state) => state.cart);
    const isCartEmpty = cart.length === 0;
    const dispatch = useAppDispatch();

    const totalDiscount = cart
        .filter((dish) => dish.discountPercent !== undefined)
        .reduce(
            (total, { price, discountPercent, amount }) =>
                total + getTotalDiscount(price, discountPercent ?? 0, amount),
            0,
        )
        .toFixed(2);

    const total = getTotalOrderPrice(cart);

    return (
        <ContentSection
            title={isCartEmpty ? "Place your order" : "You're ordering"}
            subtitle="We deliver within the city and guarantee delivery within an hour, ensuring your meal arrives fresh and right on time."
        >
            {isCartEmpty ? (
                <Text size="large">
                    Your cart is empty, but we are eagerly awaiting your order!
                    You can checkout our menu&nbsp;
                    <CustomLink color="wisteria" to="/menu" size="large">
                        here
                    </CustomLink>
                </Text>
            ) : (
                <div className={styles.cart}>
                    <Button onClick={() => dispatch(resetCart())}>
                        Empty cart
                    </Button>
                    <ul className={styles.products}>
                        {cart.map((dish) => (
                            <ProductPreview key={dish.id} dish={dish} />
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
