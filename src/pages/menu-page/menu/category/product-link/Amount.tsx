import cn from "classnames";
import { useDishInCart } from "../../../../../hooks/useDishInCart";

import NumInput from "../../../../../components/inputs/num-input/NumInput";

import styles from "./ProductLink.module.scss";

import type { Dish } from "@k7bart/restaurant-shared-types";

const Amount = ({ dish }: { dish: Dish }) => {
    const { amount, handleAmountChange } = useDishInCart(dish);

    return (
        <div
            className={cn(styles.amount, {
                [styles.visible]: amount,
            })}
            onClick={(e) => e.preventDefault()}
        >
            {amount ? (
                <div>
                    <NumInput
                        amount={amount}
                        min={0}
                        onChange={handleAmountChange}
                    />
                </div>
            ) : (
                <button onClick={() => handleAmountChange(1)}>
                    Add to cart
                </button>
            )}
        </div>
    );
};

export default Amount;
