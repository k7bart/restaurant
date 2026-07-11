import type { CartItem } from "@k7bart/restaurant-shared-types";

const getDiscount = (price: number, discountPercent = 0) =>
    price * (discountPercent / 100);

export const getPriceWithDiscount = (price: number, discountPercent = 0) =>
    price - getDiscount(price, discountPercent);

export const getPrice = (price: number, discountPercent = 0) =>
    discountPercent ? getPriceWithDiscount(price, discountPercent) : price;

export const getTotalPrice = (
    price: number,
    discountPercent = 0,
    quantity = 1,
) => (quantity > 0 ? getPrice(price, discountPercent) * quantity : 0);

export const getTotalDiscount = (
    price: number,
    discountPercent = 0,
    quantity = 1,
) => getDiscount(price, discountPercent) * quantity;

export const getTotalOrderPrice = (order: CartItem[]) =>
    order.reduce(
        (total, { price, discountPercent = 0, quantity }) =>
            total + getTotalPrice(price, discountPercent, quantity),
        0,
    );
