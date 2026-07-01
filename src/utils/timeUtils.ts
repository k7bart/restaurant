import dayjs from "dayjs";
import { addHours, isSameDay, isToday } from "date-fns";

export const START_HOUR = 10;
export const CLOSE_HOUR = 22;
export const INTERVAL = 2;

export const combineDateTime = (date: Date, time: Date): Date =>
    dayjs(date)
        .set("hour", time.getHours())
        .set("minute", time.getMinutes())
        .set("second", 0)
        .set("millisecond", 0)
        .toDate();

const START_MIN = START_HOUR * 60;
const END_MIN = CLOSE_HOUR * 60;

const toMinutes = (d: Date) => d.getHours() * 60 + d.getMinutes();

export const isTodayBookable = (now: Date) => {
    const earliest = addHours(now, INTERVAL);
    return (
        isSameDay(earliest, now) &&
        Math.max(START_MIN, toMinutes(earliest)) <= END_MIN
    );
};

export const filterTime = (time: Date, now: Date, selectedDate: Date) => {
    const mins = toMinutes(time);
    if (!isToday(selectedDate)) return mins >= START_MIN && mins <= END_MIN;
    const earliest = addHours(now, INTERVAL);
    return (
        mins >= Math.max(START_MIN, toMinutes(earliest)) && mins <= END_MIN
    );
};
