import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const CartLink = () => {
    const cart = useSelector((state) => state.cart);
    if (cart.length === 0) return;

    const total = cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
    );
    return (
        <NavLink to="/cart">
            <FaShoppingCart />
            <p className="total">${total}</p>
        </NavLink>
    );
};

export default CartLink;
