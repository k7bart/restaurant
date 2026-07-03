import { useMe } from "../../../hooks/useMe";

import ReservationRow from "./reservation-row/ReservationRow";
import NoDataMessage from "../NoDataMessage";

const Reservations = () => {
    const { reservations } = useMe();

    if (!reservations || !reservations.length)
        return (
            <NoDataMessage
                text="You don't have any reservations, but we are eagerly awaiting your visit! You can reserve a table"
                link="/table-reservation"
            />
        );

    return (
        <>
            {reservations.map((reservation) => (
                <ReservationRow
                    key={reservation.id}
                    reservation={reservation}
                />
            ))}
        </>
    );
};

export default Reservations;
