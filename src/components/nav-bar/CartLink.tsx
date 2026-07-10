import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "../../hooks";
import { getTotalPrice } from "../../utils/priceUtils";
import Tooltip from "../tooltip/Tooltip";

const CartLink = () => {
    const cart = useAppSelector((state) => state.cart);
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
            <NavLink ref={cartRef} to="/cart">
                <FaShoppingCart />
                {"$" + total.toFixed(2)}
            </NavLink>
            <Tooltip targetRef={cartRef} text="View cart" />
        </>
    );
};

export default CartLink;
