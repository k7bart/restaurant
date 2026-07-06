import { useMe } from "../../../hooks/useMe";

import NoDataMessage from "../NoDataMessage";
import Ticket from "./ticket/Ticket";

import styles from "./Tickets.module.scss";

const Tickets = () => {
    const { tickets } = useMe();

    if (!tickets || !tickets?.length) {
        return (
            <NoDataMessage
                text="You don't have any tickets yet. We invite you to check out our events"
                link="/events"
            />
        );
    }

    return (
        <div className={styles.tickets}>
            {tickets.map((ticket) => (
                <Ticket key={ticket.id} ticket={ticket} />
            ))}
        </div>
    );
};

export default Tickets;
