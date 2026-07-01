import type { Option } from "@k7bart/restaurant-shared-types";

export const SELF_PICKUP_PAYMENT_OPTIONS: Option[] = [
    { value: "cash", label: "Cash" },
    { value: "online", label: "Online" },
];

export const PAYMENT_OPTIONS: Option[] = [
    ...SELF_PICKUP_PAYMENT_OPTIONS,
    { value: "card", label: "To courier by card" },
];
