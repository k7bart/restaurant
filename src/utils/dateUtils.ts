import { addDays, getHours, startOfDay } from "date-fns";
import { CLOSE_HOUR, INTERVAL } from "./timeUtils";

export const getAvailableDay = () => {
    const today = new Date();

    return getHours(today) < CLOSE_HOUR - INTERVAL
        ? today
        : startOfDay(addDays(today, 1));
};
