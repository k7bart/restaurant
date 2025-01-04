const getDiscount = (price, discountPercent) => {
    return price * (discountPercent / 100);
};

export const getPrice = (price, discountPercent) => {
    return !discountPercent
        ? price
        : getPriceWithDiscount(price, discountPercent);
};

export const getTotalDiscount = (price, discountPercent, amount) => {
    return getDiscount(price, discountPercent) * amount;
};

export const getTotalOrderPrice = (order) => {
    return order.reduce(
        (total, { price, discountPercent, amount }) =>
            total + getTotalPrice(price, discountPercent, amount),
        0
    );
};

export const getTotalPrice = (price, discountPercent, amount) => {
    if (!amount) return 0;

    if (!discountPercent) return price * amount;

    const discountPrice = price - getDiscount(price, discountPercent);
    return !amount ? discountPrice : discountPrice * amount;
};

export const getPriceWithDiscount = (price, discountPercent) => {
    return price - getDiscount(price, discountPercent);
};
