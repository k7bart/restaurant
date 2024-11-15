import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import LinkComponent from "../../../components/links/LinkComponent/LinkComponent";
import ReservationRow from "./ReservationRow/ReservationRow";
import Text from "../../../components/Text/Text";

const sortReservations = (reservations) => {
    return [...reservations].sort((a, b) =>
        dayjs(a.dateTime).isAfter(dayjs(b.dateTime)) ? -1 : 1
    );
};

const Reservations = ({ reservationIds }) => {
    const reservations = useSelector((state) => state.reservations);

    const userReservations = reservationIds
        .map(
            (id) =>
                reservations.find((reservation) => reservation.id === id) ||
                null
        )
        .filter((reservation) => reservation);

    const sortedUserReservations = useMemo(() => {
        return sortReservations(userReservations);
    }, [userReservations]);

    return (
        <>
            {userReservations.length === 0 ? (
                <Text className="large">
                    You don&apos;t have any reservations, but we are eagerly
                    awaiting your visit! You can reserve a table&nbsp;
                    <LinkComponent
                        color="wisteria"
                        to="/table-reservation"
                        size="large"
                    >
                        here
                    </LinkComponent>
                </Text>
            ) : (
                sortedUserReservations.map((reservation) => (
                    <ReservationRow
                        key={reservation.id}
                        reservation={reservation}
                    />
                ))
            )}
        </>
    );
};

export default Reservations;
