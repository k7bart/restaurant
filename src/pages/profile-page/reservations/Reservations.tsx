import { useMe } from "../../../hooks/useMe";

import CustomLink from "../../../components/links/custom-link/CustomLink";
import ReservationRow from "./reservation-row/ReservationRow";
import Text from "../../../components/text/Text";

const Reservations = () => {
    const { reservations } = useMe();

    if (!reservations.length)
        return (
            <Text className="large">
                You don&apos;t have any reservations, but we are eagerly
                awaiting your visit! You can reserve a table&nbsp;
                <CustomLink
                    color="wisteria"
                    to="/table-reservation"
                    size="large"
                >
                    here
                </CustomLink>
            </Text>
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
