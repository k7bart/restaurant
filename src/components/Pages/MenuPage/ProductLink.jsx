import { capitalize } from "../../../utils/stringUtils";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import NumInput from "../../Inputs/NumInput/NumInput";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { addProduct, updateProductAmount } from "../../../store";

const ProductLink = ({ product, category }) => {
    const { id, name, price, isDishOfTheDay, isVegan, onSale, oldPrice } =
        product;
    const photo = product.photos[0];
    const ingredients = product.ingredients
        ? product.ingredients.join(", ")
        : undefined;

    // store
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    // amount
    const productInCart = useMemo(() => {
        return cart.find((p) => p.id === id);
    }, [cart, id]);

    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(productInCart ? productInCart.amount : 0);
    }, [productInCart]);

    const handleAmountChange = (newAmount) => {
        if (productInCart) {
            dispatch(updateProductAmount({ productId: product.id, newAmount }));
            return;
        }

        dispatch(addProduct({ ...product, amount: newAmount, category }));
    };

    return (
        <Link to={`/menu/${category}/${id}`} className="product-link">
            <div className="with-image">
                <img src={photo} alt={name} />
                {isDishOfTheDay && (
                    <p className="badge">{capitalize(category)} of the Day</p>
                )}
                <div
                    className={`amount-container ${amount ? "visible" : ""}`}
                    onClick={(e) => e.preventDefault()}
                >
                    {amount ? (
                        <div
                            className="amount"
                            onClick={(e) => e.preventDefault()}
                        >
                            <NumInput
                                amount={amount}
                                min={0}
                                onChange={handleAmountChange}
                            />
                        </div>
                    ) : (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleAmountChange(1);
                            }}
                        >
                            Add to cart
                        </button>
                    )}
                </div>
            </div>

            <div className="title">
                <h4>{name}</h4>
                {isVegan && <FaLeaf />}
            </div>

            {ingredients && <p className="large">{ingredients}</p>}

            <div className="price">
                {onSale && <h4 className="sale">{"$" + oldPrice}</h4>}
                <h4>{"$" + price}</h4>
            </div>
        </Link>
    );
};

export default ProductLink;
