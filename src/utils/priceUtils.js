const getDiscount = (price, discountPercent) => {
    return price * (discountPercent / 100);
};

export const getTotalDiscount = (price, discountPercent, amount) => {
    return getDiscount(price, discountPercent) * amount;
};

export const getTotalPrice = (price, discountPercent, amount) => {
    if (!discountPercent) return !amount ? price : price * amount;

    const discountPrice = price - getDiscount(price, discountPercent);
    return !amount ? discountPrice : discountPrice * amount;
};

export const getPriceWithDiscount = (price, discountPercent) => {
    return price - getDiscount(price, discountPercent);
};
