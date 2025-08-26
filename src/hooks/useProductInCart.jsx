import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProductAmount } from "../store";

export function useProductInCart(product, category) {
    const dispatch = useDispatch();

    const productInCart = useSelector((state) =>
        state.cart.find((p) => p.id === product.id)
    );

    const amount = productInCart?.amount || 0;

    const handleAmountChange = useCallback(
        (newAmount) => {
            if (productInCart) {
                dispatch(
                    updateProductAmount({ productId: product.id, newAmount })
                );
            } else {
                dispatch(
                    addProduct({ ...product, amount: newAmount, category })
                );
            }
        },
        [productInCart, product, category, dispatch]
    );

    return {
        amount,
        handleAmountChange,
    };
}
