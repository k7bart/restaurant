import dayjs from "dayjs";
import { addHours, isToday, set } from "date-fns";

export const START_HOUR = 10;
export const CLOSE_HOUR = 20;
export const INTERVAL = 2;

export const combineDateTime = (date, time) =>
    dayjs(date)
        .set("hour", time.getHours())
        .set("minute", time.getMinutes())
        .set("second", 0)
        .toDate();

export const filterTime = (time, today, selectedDate) => {
    const [startTime, endTime] = [START_HOUR, CLOSE_HOUR].map((hour) =>
        set(today, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 })
    );

    const minTime = isToday(selectedDate)
        ? Math.max(startTime, addHours(today, INTERVAL))
        : startTime;

    return time >= minTime && time <= endTime;
};
