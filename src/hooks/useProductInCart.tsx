import { addProductToCart, updateProductAmountInCart } from "../store";
import { useAppDispatch, useAppSelector } from "../hooks";

import type { Dish } from "@k7bart/restaurant-shared-types";

export function useProductInCart(dish: Dish) {
    const dispatch = useAppDispatch();

    const dishInCart = useAppSelector((state) =>
        state.cart.find((d) => d.id === dish.id)
    );

    const amount = dishInCart?.amount ?? 0;

    const handleAmountChange = (newAmount: number) => {
        if (dishInCart) {
            dispatch(
                updateProductAmountInCart({
                    id: dish.id,
                    amount: newAmount,
                })
            );
        } else {
            dispatch(
                addProductToCart({
                    ...dish,
                    amount: newAmount,
                })
            );
        }
    };

    return {
        amount,
        handleAmountChange,
    };
}
