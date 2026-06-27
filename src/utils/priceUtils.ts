import type { Dish } from "@k7bart/restaurant-shared-types";

const getDiscount = (price: number, discountPercent = 0) =>
    price * (discountPercent / 100);

export const getPriceWithDiscount = (price: number, discountPercent = 0) =>
    price - getDiscount(price, discountPercent);

export const getPrice = (price: number, discountPercent = 0) =>
    discountPercent ? getPriceWithDiscount(price, discountPercent) : price;

export const getTotalPrice = (price: number, discountPercent = 0, amount = 1) =>
    amount > 0 ? getPrice(price, discountPercent) * amount : 0;

export const getTotalDiscount = (
    price: number,
    discountPercent = 0,
    amount = 1
) => getDiscount(price, discountPercent) * amount;

export const getTotalOrderPrice = (order: Dish[]) =>
    order.reduce(
        (total, { price, discountPercent = 0, amount }) =>
            total + getTotalPrice(price, discountPercent, amount),
        0
    );
