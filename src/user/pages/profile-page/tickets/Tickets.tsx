import { IoTicket } from "react-icons/io5";
import { useMe } from "../../../../hooks/useMe";

import CustomLink from "../../../components/links/custom-link/CustomLink";
import Text from "../../../components/text/Text";
import Ticket from "./ticket/Ticket";

import styles from "./Tickets.module.scss";

const Tickets = () => {
    const { tickets } = useMe();

    if (!tickets.length)
        return (
            <Text size="medium">
                <IoTicket />
                &nbsp;You don&apos;t have any tickets yet. We invite you to
                check out our events&nbsp;
                <CustomLink color="wisteria" fontWeight="thin" to="/events">
                    here
                </CustomLink>
            </Text>
        );

    return (
        <div className={styles.tickets}>
            {tickets.map((ticket) => (
                <Ticket key={ticket.id} ticket={ticket} />
            ))}
        </div>
    );
};

export default Tickets;
