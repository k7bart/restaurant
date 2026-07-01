import { addDays, startOfDay } from "date-fns";
import { isTodayBookable } from "./timeUtils";

export const dateFormat = "DD/MM/YYYY";
export const dateTimeFormat = "DD/MM/YYYY HH:mm";

export const getAvailableDay = (now = new Date()) =>
    isTodayBookable(now) ? startOfDay(now) : startOfDay(addDays(now, 1));
