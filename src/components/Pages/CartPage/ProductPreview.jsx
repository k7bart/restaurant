import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProductAmount, removeProduct } from "../../../store/index";
import { IoClose } from "react-icons/io5";
import NumInput from "../../Inputs/NumInput/NumInput";

const ProductPreview = ({ product }) => {
    const {
        amount: initialAmount,
        category,
        id,
        name,
        photos,
        price,
    } = product;

    const [amount, setAmount] = useState(initialAmount);

    const dispatch = useDispatch();

    const handleAmountChange = (newAmount) => {
        setAmount(newAmount);
        dispatch(updateProductAmount({ productId: id, newAmount }));
    };
    const handleProductRemove = () => {
        dispatch(removeProduct(id));
    };

    return (
        <div className="product-preview">
            <img src={photos[0]} alt={name} />
            <Link to={`/menu/${category}/${id}`} className="title">
                <h4>{name}</h4>
            </Link>
            <NumInput amount={amount} onChange={handleAmountChange} />
            <h4>${price * amount}</h4>
            <button className="with-svg" onClick={handleProductRemove}>
                <IoClose />
            </button>
        </div>
    );
};

export default ProductPreview;
