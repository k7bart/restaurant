import { useState } from "react";
import { Link } from "react-router-dom";
import { updateAmountInCart, removeFromCart } from "../../../store";
import { getTotalPrice } from "../../../utils/priceUtils";
import { useAppDispatch } from "../../../hooks";
import CloseButton from "../../../components/buttons/close-button/CloseButton";
import NumInput from "../../../components/inputs/num-input/NumInput";

import styles from "./DishPreview.module.scss";

import type { CartItem } from "@k7bart/restaurant-shared-types";

const DishPreview = ({ dish }: { dish: CartItem }) => {
    const {
        quantity: initialQuantity,
        category,
        discountPercent,
        id,
        name,
        photos,
        price,
    } = dish;

    const [quantity, setQuantity] = useState(initialQuantity);

    const dispatch = useAppDispatch();

    const handleAmountChange = (newAmount: number) => {
        setQuantity(newAmount);
        dispatch(updateAmountInCart({ id, quantity: newAmount }));
    };
    const handleProductRemove = () => {
        dispatch(removeFromCart({ id }));
    };

    return (
        <div className={styles.dishPreview}>
            <div
                className={styles.image}
                style={
                    photos?.[0]
                        ? { backgroundImage: `url(${photos[0]})` }
                        : undefined
                }
            >
                {!photos?.[0] && "No photo 🥲"}
            </div>
            <Link to={`/menu/${category}/${id}`} className={styles.title}>
                <h4>{name}</h4>
            </Link>
            <NumInput amount={quantity ?? 1} onChange={handleAmountChange} />
            <div className={styles.price}>
                {discountPercent && (
                    <span className={styles.fullPrice}>
                        {"$" +
                            getTotalPrice(price, undefined, quantity).toFixed(
                                2,
                            )}
                    </span>
                )}
                <h4 className={styles.actualPrice}>
                    {"$" +
                        getTotalPrice(price, discountPercent, quantity).toFixed(
                            2,
                        )}
                </h4>
            </div>
            <CloseButton onClick={handleProductRemove} />
        </div>
    );
};

export default DishPreview;
