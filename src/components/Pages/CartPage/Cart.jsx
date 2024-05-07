import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../../store/index";
import ProductPreview from "./ProductPreview";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const total = cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
    );
    const totalDiscount = cart
        .filter((product) => product.onSale)
        .reduce(
            (total, product) =>
                total + (product.oldPrice - product.price) * product.amount,
            0
        );

    const handleCartReset = () => {
        dispatch(reset());
    };
    return (
        <div className="cart">
            <button className="small-color-button" onClick={handleCartReset}>
                Empty cart
            </button>
            <ul className="products">
                {cart.map((product) => (
                    <ProductPreview key={product.id} product={product} />
                ))}
            </ul>
            <div className="prices-container">
                <div className="container">
                    <h4>Shipping: $0</h4>
                </div>
                <div className="container">
                    <h4>Discount: $</h4>
                    <h4>{totalDiscount}</h4>
                </div>
                <div className="container">
                    <h4>Total: $</h4>
                    <h4 className="price">{total}</h4>
                </div>
            </div>
            <button className="small-color-button">Сomplete the order</button>
        </div>
    );
};

export default Cart;
