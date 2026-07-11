import { addToCart, updateAmountInCart } from "../store";
import { useAppDispatch, useAppSelector } from "../hooks";

import type { Dish } from "@k7bart/restaurant-shared-types";

export function useDishInCart(dish: Dish | null) {
    const dispatch = useAppDispatch();

    const dishInCart = useAppSelector((state) =>
        dish ? state.cart.find((d) => d.id === dish.id) : undefined,
    );

    const amount = dishInCart?.quantity ?? 0;

    const handleAmountChange = (newAmount: number) => {
        if (!dish) {
            return;
        }

        if (dishInCart) {
            dispatch(
                updateAmountInCart({
                    id: dish.id,
                    quantity: newAmount,
                }),
            );
        } else {
            dispatch(
                addToCart({
                    ...dish,
                    quantity: newAmount,
                }),
            );
        }
    };

    return {
        amount,
        handleAmountChange,
    };
}
