import cn from "classnames";
import dayjs from "dayjs";
import { dateTimeFormat } from "../../../../../utils/dateUtils";

import Row from "../../../../../components/Row/Row";
import Status from "../../../../../components/status/Status";
import Text from "../../../../components/text/Text";

import styles from "./ReservationRow.module.scss";

import type { Dayjs } from "dayjs";
import type { Reservation } from "@k7bart/restaurant-shared-types";

const today = dayjs("2023-10-17T17:00:00+03:00");

const formatGuestCount = ({ adults, children }: Reservation["guests"]) => {
    if (adults === 1) return "1 guest";
    if (children === 1) return `${adults} adults and 1 child`;
    if (children) return `${adults} adults and ${children} children`;
    return `${adults} guests`;
};

const getDateStatus = (date: Dayjs) => {
    if (today.isSame(date, "day")) return "today";
    if (today.isBefore(date, "day")) return "upcoming";
    return "past";
};

const ReservationRow = ({ reservation }: { reservation: Reservation }) => {
    const { dateTime, status, guests, additionalRequirements } = reservation;

    return (
        <Row
            additionalStyles={cn(
                styles[getDateStatus(dayjs(dateTime))],
                styles.reservation,
            )}
        >
            <Status additionalStyles={styles.status} status={status} />

            <Text className={styles.text} size="medium">
                {dayjs(dateTime).format(dateTimeFormat)}
            </Text>

            <Text className={styles.text} size="medium">
                {formatGuestCount(guests)}
            </Text>

            {additionalRequirements && (
                <Text className={styles.text} size="medium">
                    Additional requirements: {additionalRequirements}
                </Text>
            )}
        </Row>
    );
};

export default ReservationRow;
