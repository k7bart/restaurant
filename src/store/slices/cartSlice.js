import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProduct(state, action) {
            const { id, amount } = action.payload;
            const existingProduct = state.find((product) => product.id === id);
            if (existingProduct) {
                existingProduct.amount += amount;
            } else {
                state.push(action.payload);
            }
        },
        updateProductAmount(state, action) {
            const { productId, newAmount } = action.payload;
            const productIndex = state.findIndex(
                (product) => product.id === productId
            );

            if (productIndex !== -1) {
                state[productIndex].amount = newAmount;
            }
        },
        removeProduct(state, action) {
            return state.filter((product) => product.id !== action.payload);
        },
        reset(state, action) {
            return [];
        },
    },
});

export const { addProduct, updateProductAmount, removeProduct, reset } =
    cartSlice.actions;
// export default cartSlice.reducer;
export const cartReducer = cartSlice.reducer;
