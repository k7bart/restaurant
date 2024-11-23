import { IoTicket } from "react-icons/io5";
import { events } from "../../../../state.js";

import PropTypes from "prop-types";

import LinkComponent from "../../../components/links/LinkComponent/LinkComponent.jsx";
import Text from "../../../components/Text/Text.jsx";
import Ticket from "./ticket/Ticket.jsx";

import styles from "./Tickets.module.scss";

const Tickets = ({ tickets }) => {
    return tickets.length === 0 ? (
        <Text size="medium">
            <IoTicket />
            &nbsp;You don&apos;t have any tickets yet. We invite you to check
            out our events&nbsp;
            <LinkComponent color="wisteria" fontWeight="thin" to="/events">
                here
            </LinkComponent>
        </Text>
    ) : (
        <div className={styles.tickets}>
            {tickets.map(({ id, eventId, guests }) => {
                const event = events.find((e) => e.id === eventId);
                return (
                    <Ticket key={id} event={event} guests={guests} id={id} />
                );
            })}
        </div>
    );
};

Tickets.propTypes = {
    tickets: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            eventId: PropTypes.number.isRequired,
            guests: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default Tickets;
