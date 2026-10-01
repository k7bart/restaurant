import cn from "classnames";
import { useProductInCart } from "../../../../../hooks/useProductInCart";

import NumInput from "../../../../../components/inputs/num-input/NumInput";

import styles from "./ProductLink.module.scss";

import type { Dish } from "@k7bart/restaurant-shared-types";

const Amount = ({ dish }: { dish: Dish }) => {
    const { quantity, handleQuantityChange } = useProductInCart(dish);

    return (
        <div
            className={cn(styles.amount, {
                [styles.visible]: quantity,
            })}
            onClick={(e) => e.preventDefault()}
        >
            {quantity ? (
                <div>
                    <NumInput
                        amount={quantity}
                        min={0}
                        onChange={handleQuantityChange}
                    />
                </div>
            ) : (
                <button onClick={() => handleQuantityChange(1)}>
                    Add to cart
                </button>
            )}
        </div>
    );
};

export default Amount;
