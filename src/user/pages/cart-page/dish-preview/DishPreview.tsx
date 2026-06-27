import { useState } from "react";
import { Link } from "react-router-dom";
import { updateAmountInCart, removeFromCart } from "../../../../store";
import { getTotalPrice } from "../../../../utils/priceUtils";
import { useAppDispatch } from "../../../../hooks";
import CloseButton from "../../../../components/buttons/CloseButton/CloseButton";
import NumInput from "../../../components/Inputs/NumInput/NumInput";

import styles from "./DishPreview.module.scss";

import type { Dish } from "@k7bart/restaurant-shared-types";

const DishPreview = ({ dish }: { dish: Dish }) => {
    const {
        amount: initialAmount,
        category,
        discountPercent,
        id,
        name,
        photos,
        price,
    } = dish;

    const [amount, setAmount] = useState(initialAmount);

    const dispatch = useAppDispatch();

    const handleAmountChange = (newAmount: number) => {
        setAmount(newAmount);
        dispatch(updateAmountInCart({ id, amount: newAmount }));
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
            <NumInput amount={amount} onChange={handleAmountChange} />
            <div className={styles.price}>
                {discountPercent && (
                    <span className={styles.fullPrice}>
                        {"$" +
                            getTotalPrice(price, undefined, amount).toFixed(2)}
                    </span>
                )}
                <h4 className={styles.actualPrice}>
                    {"$" +
                        getTotalPrice(price, discountPercent, amount).toFixed(
                            2,
                        )}
                </h4>
            </div>
            <CloseButton onClick={handleProductRemove} />
        </div>
    );
};

export default DishPreview;
