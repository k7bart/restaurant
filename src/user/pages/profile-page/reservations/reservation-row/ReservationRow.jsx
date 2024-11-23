import classNames from "classnames";
import dayjs from "dayjs";
import PropTypes from "prop-types";

import Row from "../../../../../common/components/Row/Row";
import Status from "../../../../../common/components/status/Status";
import Text from "../../../../components/Text/Text";

import styles from "./ReservationRow.module.scss";

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
            additionalStyles={classNames(
                styles[getDateStatus(dateTime)],
                styles.reservation
            )}
        >
            <Status additionalStyles={styles.status} status={status} />

            <Text className={styles.text} size="medium">
                {dayjs(dateTime).format("DD/MM/YYYY HH:mm")}
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

ReservationRow.propTypes = {
    reservation: PropTypes.shape({
        dateTime: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        guests: PropTypes.shape({
            adults: PropTypes.number.isRequired,
            children: PropTypes.number,
        }).isRequired,
        additionalRequirements: PropTypes.string,
    }).isRequired,
};

export default ReservationRow;
