import dayjs from "dayjs";

export const combineDateTime = (date, time) => {
    return dayjs(date)
        .set("hour", time.getHours())
        .set("minute", time.getMinutes())
        .set("second", 0)
        .toDate();
};
