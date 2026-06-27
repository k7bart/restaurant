import { addToCart, updateAmountInCart } from "../store";
import { useAppDispatch, useAppSelector } from "../hooks";

import type { Dish } from "@k7bart/restaurant-shared-types";

export function useProductInCart(dish: Dish) {
    const dispatch = useAppDispatch();

    const dishInCart = useAppSelector((state) =>
        state.cart.find((d) => d.id === dish.id),
    );

    const amount = dishInCart?.amount ?? 0;

    const handleAmountChange = (newAmount: number) => {
        if (dishInCart) {
            dispatch(
                updateAmountInCart({
                    id: dish.id,
                    amount: newAmount,
                }),
            );
        } else {
            dispatch(
                addToCart({
                    ...dish,
                    amount: newAmount,
                }),
            );
        }
    };

    return {
        amount,
        handleAmountChange,
    };
}
