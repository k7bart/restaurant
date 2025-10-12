import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { getTotalPrice } from "../../../utils/priceUtils";

import NavLinkComponent from "../links/NavLinkComponent/NavLinkComponent";
import { useRef } from "react";
import Tooltip from "../tooltip/Tooltip";

const CartLink = () => {
    const cart = useSelector((state) => state.cart);
    const cartRef = useRef(null);

    const total = cart.reduce(
        (total, product) =>
            total +
            getTotalPrice(
                product.price,
                product.discountPercent,
                product.amount
            ),
        0
    );

    if (total === 0) return null;

    return (
        <>
            <NavLinkComponent ref={cartRef} to="/cart">
                <FaShoppingCart />
                {"$" + total.toFixed(2)}
            </NavLinkComponent>
            <Tooltip targetRef={cartRef} text="View cart" />
        </>
    );
};

export default CartLink;
