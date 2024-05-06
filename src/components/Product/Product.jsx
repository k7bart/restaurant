import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProductAmount } from "../../store";

import { menu } from "../../state";
import { IoClose } from "react-icons/io5";
import NumInput from "../NumInput/NumInput";
import Nutrients from "./Nutrients";
import ProductCarrousel from "./ProductCarrousel";
import "./Product.scss";

// is it even legal?
const CloseButton = ({ to }) => {
    return (
        <Link to={to}>
            <button className="close-button">
                <IoClose />
            </button>
        </Link>
    );
};

const Product = () => {
    const { category } = useParams();
    const { productId } = useParams();
    const product = menu
        .find((c) => c.name === category)
        .dishes.find((p) => p.id === productId);

    // amount
    const [amount, setAmount] = useState(1);
    const handleAmountChange = (newAmount) => {
        setAmount(newAmount);
    };

    // store
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const handleAddProduct = () => {
        const productInCart = cart.find((product) => product.id === productId);

        if (productInCart) {
            const productId = productInCart.id;
            const newAmount = productInCart.amount + amount;
            dispatch(updateProductAmount({ productId, newAmount }));
            return;
        }

        dispatch(addProduct({ ...product, amount, category }));
    };

    // totalPrice
    const [totalPrice, setTotalPrice] = useState(product.price);
    useEffect(() => {
        setTotalPrice(product.price * amount);
    }, [product.price, amount]);

    return (
        <div className="product">
            <CloseButton to="/menu" />
            <ProductCarrousel product={product} />
            <div className="description">
                <h3>{product.name}</h3>
                <h4>{product.ingredients.join(", ")}</h4>
                <Nutrients nutrients={product.nutrients} />
                <div className="prices-container">
                    <div className="container">
                        <h4>Amount:</h4>
                        <NumInput
                            amount={amount}
                            onChange={handleAmountChange}
                        />
                    </div>
                    <div className="container">
                        <h4>Total: $</h4>
                        <h3 className="price">{totalPrice}</h3>
                    </div>
                </div>

                <button
                    className="small-color-button"
                    onClick={handleAddProduct}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
