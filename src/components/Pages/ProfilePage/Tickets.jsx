import { Link } from "react-router-dom";
import { IoTicket } from "react-icons/io5";
import { events } from "../../../state.js";
import dayjs from "dayjs";
import AccordionItem from "../../Accordion/AccordionItem";

const Tickets = ({ tickets }) => {
    return (
        <AccordionItem title="Tickets">
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
                <div className="tickets">
                    {tickets.map(({ id, eventId, guests }) => {
                        const event = events.find((e) => e.id === eventId);
                        return (
                            <div key={id} className="ticket-wrapper">
                                <div className="top-left corner"></div>
                                <div className="top-right corner"></div>
                                <div className="bottom-right corner"></div>
                                <div className="bottom-left corner"></div>
                                <div className="border left"></div>
                                <div className="border within"></div>
                                <div className="border right"></div>

                                <div className="ticket">
                                    <p className="guests">
                                        🧑{guests.adults}
                                        &nbsp;
                                        {guests.children
                                            ? `🧒${guests.children}`
                                            : ""}
                                    </p>
                                    <div className="info">
                                        <p>
                                            {dayjs(event.date).format(
                                                "DD/MM/YYYY HH:MM"
                                            )}
                                        </p>
                                        <h4>{event.title}</h4>
                                        <p>Lviv</p>
                                    </div>

                                    <p className="id">№&nbsp;{id}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </AccordionItem>
    );
};

export default Tickets;
