import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Dish } from "@k7bart/restaurant-shared-types";

const cartSlice = createSlice({
    name: "cart",
    initialState: [] as Dish[],
    reducers: {
        addToCart(state, action: PayloadAction<Dish>) {
            const { id, amount } = action.payload;
            const dishIndex = state.findIndex((dish) => dish.id === id);

            if (dishIndex === -1) {
                state.push(action.payload);
                return;
            }

            state[dishIndex].amount += amount;
        },
        updateAmountInCart(
            state,
            action: PayloadAction<Pick<Dish, "id" | "amount">>
        ) {
            const { id, amount } = action.payload;
            const dishIndex = state.findIndex((dish) => dish.id === id);

            if (dishIndex === -1) return;

            if (amount <= 0) {
                state.splice(dishIndex, 1);
                return;
            }

            state[dishIndex].amount = amount;
        },
        removeFromCart(state, action: PayloadAction<Pick<Dish, "id">>) {
            const dishIndex = state.findIndex(
                (dish) => dish.id === action.payload.id
            );

            if (dishIndex !== -1) {
                state.splice(dishIndex, 1);
            }
        },
        resetCart() {
            return [];
        },
    },
});

export const { addToCart, updateAmountInCart, removeFromCart, resetCart } =
    cartSlice.actions;
export const cartReducer = cartSlice.reducer;
