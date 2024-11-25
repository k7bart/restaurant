import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProductAmount, removeProduct } from "../../../../store/index";
import { getTotalPrice } from "../../../../utils/priceUtils";
import CloseButton from "../../../../common/components/buttons/CloseButton/CloseButton";
import NumInput from "../../../components/Inputs/NumInput/NumInput";
import styles from "./ProductPreview.module.scss";

const ProductPreview = ({ product }) => {
    const {
        amount: initialAmount,
        category,
        discountPercent,
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
        <div className={styles.productPreview}>
            <img src={photos[0]} alt={name} />
            <Link to={`/menu/${category}/${id}`} className={styles.title}>
                <h4>{name}</h4>
            </Link>
            <NumInput amount={amount} onChange={handleAmountChange} />
            <div className={styles.price}>
                {discountPercent && (
                    <span className={styles.fullPrice}>
                        {"$" + getTotalPrice(price, null, amount).toFixed(2)}
                    </span>
                )}
                <h4 className={styles.actualPrice}>
                    {"$" +
                        getTotalPrice(price, discountPercent, amount).toFixed(
                            2
                        )}
                </h4>
            </div>
            <CloseButton onClick={handleProductRemove} />
        </div>
    );
};

export default ProductPreview;
