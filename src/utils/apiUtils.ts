import type { BaseEntity } from "@k7bart/restaurant-shared-types";

export const toIds = <T extends BaseEntity>(items: T[]) =>
    items.map((item) => item.id);
