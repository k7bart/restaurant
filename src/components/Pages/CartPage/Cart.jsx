import { useSelector } from "react-redux";
import ProductPreview from "./ProductPreview";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    const total = cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
    );

    return (
        <div className="cart">
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
                    <h4>Total: $</h4>
                    <h4 className="price">{total}</h4>
                </div>
            </div>
            <button className="small-color-button">Сomplete the order</button>
        </div>
    );
};

export default Cart;
