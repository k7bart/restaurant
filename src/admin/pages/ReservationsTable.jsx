import { capitalize } from "../../utils/stringUtils";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const today = dayjs("2023-10-17T17:00:00+03:00");
const isOutdated = (date) => dayjs(date).isBefore(today, "day");
// const isOutdated = (date) => dayjs(date).isBefore(dayjs(), "day");

const Row = ({ reservation }) => {
    const {
        id,
        dateTime,
        code,
        status,
        guests,
        reservedBy,
        additionalRequirements,
    } = reservation;

    return (
        <tr
            className={
                status === "done" || isOutdated(dateTime) ? "done" : undefined
            }
        >
            <td>{id}</td>
            <td>{dayjs(dateTime).format("DD/MM/YYYY")}</td>
            <td>{dayjs(dateTime).format("HH:mm")}</td>
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
    const reservations = useSelector((state) => state.reservations);
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
