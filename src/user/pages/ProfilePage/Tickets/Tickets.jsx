import { Link } from "react-router-dom";
import { IoTicket } from "react-icons/io5";
import { events } from "../../../../state.js";
import styles from "./Tickets.module.scss";
import Ticket from "./Ticket/Ticket.jsx";

const Tickets = ({ tickets }) => {
    return (
        <>
            {tickets.length === 0 ? (
                <p className="large">
                    <IoTicket />
                    &nbsp;You don&apos;t have any tickets yet. We invite you to
                    check out our events&nbsp;
                    <Link to="/events" className="large wisteria">
                        here
                    </Link>
                </p>
            ) : (
                <div className={styles.tickets}>
                    {tickets.map(({ id, eventId, guests }) => {
                        const event = events.find((e) => e.id === eventId);
                        return (
                            <Ticket
                                key={id}
                                event={event}
                                guests={guests}
                                id={id}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Tickets;
