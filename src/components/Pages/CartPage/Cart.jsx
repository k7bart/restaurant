import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../../store/index";
import ProductPreview from "./ProductPreview";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalDiscount = cart
        .filter((product) => product.discountPercent != null)
        .reduce(
            (total, { price, discountPercent, amount }) =>
                total + price * (discountPercent / 100) * amount,
            0
        )
        .toFixed(2); // returns string

    const total = (
        cart.reduce(
            (total, product) => total + product.price * product.amount,
            0
        ) - totalDiscount
    ).toFixed(2); // returns string

    return (
        <div className="cart">
            <button className="small color" onClick={() => dispatch(reset())}>
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
            <button className="small color">Complete the order</button>
        </div>
    );
};

export default Cart;
