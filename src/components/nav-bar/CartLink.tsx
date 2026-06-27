import { useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../utils/priceUtils";
import CustomNavLink from "../links/custom-nav-link/CustomNavLink";
import Tooltip from "../tooltip/Tooltip";

type CartItem = {
    amount: number;
    discountPercent: number;
    price: number;
};

const CartLink = () => {
    const cart = useSelector((state: { cart: CartItem[] }) => state.cart);
    const cartRef = useRef<HTMLAnchorElement>(null);

    const total = cart.reduce(
        (total, product) =>
            total +
            getTotalPrice(
                product.price,
                product.discountPercent,
                product.amount,
            ),
        0,
    );

    if (total === 0) return null;

    return (
        <>
            <CustomNavLink ref={cartRef} to="/cart">
                <FaShoppingCart />
                {"$" + total.toFixed(2)}
            </CustomNavLink>
            <Tooltip targetRef={cartRef} text="View cart" />
        </>
    );
};

export default CartLink;
