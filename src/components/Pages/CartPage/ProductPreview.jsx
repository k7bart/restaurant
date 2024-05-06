import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProductAmount } from "../../../store";
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
        const productId = product.id;
        dispatch(updateProductAmount({ productId, newAmount }));
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
            </div>
        </div>
    );
};

export default ProductPreview;
