import { addToCart, updateQuantityInCart } from "../store";
import { useAppDispatch, useAppSelector } from "../hooks";

import type { Dish } from "@k7bart/restaurant-shared-types";

export function useProductInCart(dish: Dish) {
    const dispatch = useAppDispatch();

    const dishInCart = useAppSelector((state) =>
        state.cart.find((d) => d.id === dish.id),
    );

    const quantity = dishInCart?.quantity ?? 0;

    const handleQuantityChange = (newQuantity: number) => {
        if (dishInCart) {
            dispatch(
                updateQuantityInCart({
                    id: dish.id,
                    quantity: newQuantity,
                }),
            );
        } else {
            dispatch(
                addToCart({
                    ...dish,
                    quantity: newQuantity,
                }),
            );
        }
    };

    return {
        quantity,
        handleQuantityChange,
    };
}
