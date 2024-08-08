import { capitalize } from "../../../../../utils/stringUtils";
import classNames from "classnames";
import dayjs from "dayjs";
import styles from "./ReservationRow.module.scss";
import Row from "../../../../../common/components/Row/Row";

const today = dayjs("2023-10-17T17:00:00+03:00");
// const today = dayjs();

const formatGuestCount = ({ adults, children }) => {
    if (adults === 1) return "1 guest";
    if (children === 1) return `${adults} adults and 1 child`;
    if (children) return `${adults} adults and ${children} children`;
    return `${adults} guests`;
};

const getDateStatus = (date) => {
    if (today.isSame(date, "day")) return "today";
    if (today.isBefore(date, "day")) return "upcoming";
    return "past";
};

const ReservationRow = ({ reservation }) => {
    const { dateTime, status, guests, additionalRequirements } = reservation;

    return (
        <Row
            className={classNames(
                styles[getDateStatus(dateTime)],
                styles.reservation
            )}
        >
            <div>
                <div className={classNames(styles.status, styles[status])}>
                    {capitalize(status)}
                </div>
                <p>{dayjs(dateTime).format("DD/MM/YYYY HH:mm")}</p>
                <p>{formatGuestCount(guests)}</p>
            </div>
            {additionalRequirements && (
                <div>
                    <p>Additional requirements: {additionalRequirements}</p>
                </div>
            )}
        </Row>
    );
};

export default ReservationRow;
