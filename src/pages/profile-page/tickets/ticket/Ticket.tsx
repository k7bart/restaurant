import classNames from "classnames";
import dayjs from "dayjs";
import { dateTimeFormat } from "../../../../utils/dateUtils";

import Text from "../../../../components/text/Text";

import styles from "./Ticket.module.scss";

import type { Ticket } from "@k7bart/restaurant-shared-types";

const Ticket = ({ ticket }: { ticket: Ticket }) => {
    const { id, event, guests } = ticket;

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
                    {guests.children && `🧒${guests.children}`}
                </Text>

                <div className={styles.info}>
                    <Text>{dayjs(event.date).format(dateTimeFormat)}</Text>

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

export default Ticket;
