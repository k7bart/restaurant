import classNames from "classnames";
import dayjs from "dayjs";
import PropTypes from "prop-types";

import Text from "../../../../components/Text/Text";

import styles from "./Ticket.module.scss";

const Ticket = ({ event, guests, id }) => {
    return (
        <div className={styles.ticketWrapper}>
            <div className={classNames(styles.topLeft, styles.corner)}></div>
            <div className={classNames(styles.topRight, styles.corner)}></div>
            <div
                className={classNames(styles.bottomRight, styles.corner)}
            ></div>
            <div className={classNames(styles.bottomLeft, styles.corner)}></div>
            <div className={classNames(styles.border, styles.left)}></div>
            <div className={classNames(styles.border, styles.within)}></div>
            <div className={classNames(styles.border, styles.right)}></div>

            <div className={styles.ticket}>
                <Text className={styles.guests} size="medium">
                    🧑{guests.adults}
                    &nbsp;
                    {guests.children ? `🧒${guests.children}` : ""}
                </Text>

                <div className={styles.info}>
                    <Text>{dayjs(event.date).format("DD/MM/YYYY HH:MM")}</Text>

                    <h4>{event.title}</h4>

                    <Text>Lviv</Text>
                </div>

                <Text className={styles.id} size="medium">
                    №&nbsp;{id}
                </Text>
            </div>
        </div>
    );
};

Ticket.propTypes = {
    event: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    guests: PropTypes.shape({
        adults: PropTypes.number.isRequired,
        children: PropTypes.number,
    }).isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Ticket;
