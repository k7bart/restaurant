import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProductToCart(state, action) {
            const { id, amount } = action.payload;
            const existingProduct = state.find((product) => product.id === id);
            if (existingProduct) {
                existingProduct.amount += amount;
            } else {
                state.push(action.payload);
            }
        },
        updateProductAmountInCart(state, action) {
            const { productId, newAmount } = action.payload;
            const productIndex = state.findIndex(
                (product) => product.id === productId
            );

            if (productIndex !== -1) {
                state[productIndex].amount = newAmount;
            }
        },
        removeProductFromCart(state, action) {
            return state.filter((product) => product.id !== action.payload);
        },
        resetCart() {
            return [];
        },
    },
});

export const {
    addProductToCart,
    updateProductAmountInCart,
    removeProductFromCart,
    resetCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
