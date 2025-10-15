import dayjs from "dayjs";
import { addHours, isToday, set } from "date-fns";

export const START_HOUR = 10;
export const CLOSE_HOUR = 20;
export const INTERVAL = 2;

export const combineDateTime = (date: Date, time: Date): Date =>
    dayjs(date)
        .set("hour", time.getHours())
        .set("minute", time.getMinutes())
        .set("second", 0)
        .set("millisecond", 0)
        .toDate();

export const filterTime = (time: Date, today: Date, selectedDate: Date) => {
    const startTime = set(today, {
        hours: START_HOUR,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    });
    const endTime = set(today, {
        hours: CLOSE_HOUR,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    });

    const minTime = isToday(selectedDate)
        ? addHours(today, INTERVAL)
        : startTime;

    return time >= minTime && time <= endTime;
};
