import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { getTotalPrice } from "../../../utils/priceUtils";

import NavLinkComponent from "../links/NavLinkComponent/NavLinkComponent";

const CartLink = () => {
    const cart = useSelector((state) => state.cart);

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
        <NavLinkComponent to="/cart">
            <FaShoppingCart />
            {"$" + total.toFixed(2)}
        </NavLinkComponent>
    );
};

export default CartLink;
