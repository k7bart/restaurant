import { addDays, getHours, startOfDay } from "date-fns";
import { CLOSE_HOUR, INTERVAL } from "./timeUtils";

export const dateFormat = "DD/MM/YYYY";
export const dateTimeFormat = "DD/MM/YYYY HH:mm";

export const getAvailableDay = () => {
    const today = new Date();

    return getHours(today) < CLOSE_HOUR - INTERVAL
        ? today
        : startOfDay(addDays(today, 1));
};
