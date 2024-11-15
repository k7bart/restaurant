import classNames from "classnames";
import dayjs from "dayjs";
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
                <p className={styles.guests}>
                    🧑{guests.adults}
                    &nbsp;
                    {guests.children ? `🧒${guests.children}` : ""}
                </p>

                <div className={styles.info}>
                    <p>{dayjs(event.date).format("DD/MM/YYYY HH:MM")}</p>
                    <h4>{event.title}</h4>
                    <p>Lviv</p>
                </div>

                <p className={styles.id}>№&nbsp;{id}</p>
            </div>
        </div>
    );
};

export default Ticket;
