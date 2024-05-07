import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProductAmount, removeProduct } from "../../../store/index";
import { IoClose } from "react-icons/io5";
import NumInput from "../../NumInput/NumInput";

const ProductPreview = ({ product }) => {
    const productLink = `/menu/${product.category}/${product.id}`;
    const imageSrc = product.photos[0];
    const price = (
        <div className="price">
            {product.onSale && (
                <span className="sale">
                    <h4>${product.oldPrice}</h4>
                </span>
            )}
            <h4>${product.price}</h4>
        </div>
    );

    const [amount, setAmount] = useState(product.amount);
    const dispatch = useDispatch();
    const handleAmountChange = (newAmount) => {
        setAmount(newAmount);
        dispatch(updateProductAmount({ productId: product.id, newAmount }));
    };
    const handleProductRemove = () => {
        dispatch(removeProduct(product.id));
    };

    return (
        <div className="product-preview">
            <div className="container">
                <img src={imageSrc} alt={product.name} />
                <div className="content">
                    <div>
                        <Link to={productLink} className="title link">
                            {product.name}
                        </Link>
                        <NumInput
                            amount={amount} // Pass product amount directly
                            onChange={handleAmountChange}
                        />
                        {price}
                    </div>

                    <p>{product.description}</p>
                </div>
                <button className="close-button" onClick={handleProductRemove}>
                    <IoClose />
                </button>
            </div>
        </div>
    );
};

export default ProductPreview;
