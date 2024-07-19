import { capitalize } from "../../../utils/stringUtils";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import dayjs from "dayjs";
import AccordionItem from "../../Accordion/AccordionItem";

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

const sortReservations = (reservations) => {
    return [...reservations].sort((a, b) =>
        dayjs(a.dateTime).isAfter(dayjs(b.dateTime)) ? -1 : 1
    );
};

const Reservation = ({ reservation }) => {
    const { dateTime, status, guests, additionalRequirements } = reservation;

    return (
        <div className={`${getDateStatus(dateTime)} reservation row`}>
            <div>
                <div className={`status ${status}`}>{capitalize(status)}</div>
                <p>{dayjs(dateTime).format("DD/MM/YYYY HH:mm")}</p>
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

const Reservations = ({ reservationIds }) => {
    const reservations = useSelector((state) => state.reservations);
    const userReservations = reservationIds.map((id) =>
        reservations.find((reservation) => reservation.id === id)
    );
    const sortedUserReservations = useMemo(() => {
        return sortReservations(userReservations);
    }, [userReservations]);

    return (
        <AccordionItem title="Table reservations" className="reservations">
            {userReservations.length === 0 ? (
                <p className="large">
                    You don&apos;t have any reservations, but we are eagerly
                    awaiting your visit! You can reserve a table&nbsp;
                    <Link className="large wisteria" to="/table-reservation">
                        here
                    </Link>
                </p>
            ) : (
                sortedUserReservations.map((reservation) => (
                    <Reservation
                        key={reservation.id}
                        reservation={reservation}
                    />
                ))
            )}
        </AccordionItem>
    );
};

export default Reservations;
