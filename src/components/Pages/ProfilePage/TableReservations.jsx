import { Link } from "react-router-dom";
import dayjs from "dayjs";
import AccordionItem from "./AccordionItem";

const today = dayjs();

const formatGuestCount = (guests) => {
    const { adults, children } = guests;

    if (adults === 1) return "1 guest";
    if (children) return `Adults: ${adults}, children: ${children}`;
    return `${adults} guests`;
};

const getDateStatus = (date) => {
    if (today.isSame(date, "day")) return "today";
    if (today.isBefore(date, "day")) return "upcoming";
    return "past";
};

const Reservation = ({ reservation }) => {
    const { additionalRequirements, date, time, guests } = reservation;

    return (
        <div className={getDateStatus(date) + " reservation row"}>
            <div>
                <p>
                    {dayjs(date).format("DD/MM/YYYY")} {time}
                </p>

                <p>{formatGuestCount(guests)}</p>
            </div>

            {additionalRequirements && (
                <div>
                    <p>Additional requirements: {additionalRequirements}</p>
                </div>
            )}
        </div>
    );
};

const TableReservations = ({ reservations }) => {
    const sortedReservations = [...reservations].sort((a, b) =>
        dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1
    );

    return (
        <AccordionItem title="Table reservations" className="reservations">
            {reservations.length === 0 ? (
                <p className="large">
                    You don&apos;t have any reservations, but we are eagerly
                    awaiting your visit! You can reserve a table&nbsp;
                    <Link className="large wisteria" to="/table-reservation">
                        here
                    </Link>
                </p>
            ) : (
                sortedReservations.map((reservation, i) => (
                    <Reservation key={i} reservation={reservation} />
                ))
            )}
        </AccordionItem>
    );
};

export default TableReservations;
