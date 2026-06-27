export const SELF_PICKUP_PAYMENT_OPTIONS = [
    { option: "cash", label: "Cash" },
    { option: "online", label: "Online" },
];

export const PAYMENT_OPTIONS = [
    ...SELF_PICKUP_PAYMENT_OPTIONS,
    { option: "card", label: "To courier by card" },
];
