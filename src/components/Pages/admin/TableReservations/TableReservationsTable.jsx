import { capitalize } from "../../../../utils/stringUtils";
import dayjs from "dayjs";
import reservations from "../../../../store/slices/tableReservationsSlice";

const Row = ({ reservation }) => {
    const {
        id,
        date,
        time,
        code,
        status,
        guests,
        reservedBy,
        additionalRequirements,
    } = reservation;

    return (
        // and if outdated
        <tr className={status === "done" ? "done" : undefined}>
            <td>{id}</td>
            <td>{dayjs(date).format("DD/MM/YYYY")}</td>
            <td>{time}</td>
            <td>{code}</td>
            <td>
                <div className={`status ${status}`}>{capitalize(status)}</div>
            </td>
            <td>{guests.adults}</td>
            <td>{guests.children}</td>
            <td>{reservedBy.name}</td>
            <td>{reservedBy.phone}</td>
            <td>{reservedBy.email}</td>
            <td>{additionalRequirements}</td>
        </tr>
    );
};

const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Code</th>
                    <th>Status</th>
                    <th>Adults</th>
                    <th>Children</th>
                    <th>Reserved by</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>Additional requiroments</th>
                </tr>
            </thead>
            <tbody>
                {reservations.map((reservation) => (
                    <Row key={reservation.id} reservation={reservation} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
