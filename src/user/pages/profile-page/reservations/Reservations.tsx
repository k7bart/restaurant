import { useMe } from "../../../../hooks/useMe";

import LinkComponent from "../../../components/links/LinkComponent/LinkComponent";
import ReservationRow from "./reservation-row/ReservationRow";
import Text from "../../../components/text/Text";

const Reservations = () => {
    const { reservations } = useMe();

    if (!reservations.length)
        return (
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
