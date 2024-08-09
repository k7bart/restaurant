import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { events } from "../../../../state.js";
import ContentSection from "../../../components/TwoSectionsPage/ContentSection/ContentSection.jsx";
import EventReservationForm from "./EventReservationForm.jsx";

const EventReservation = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);
    const nav = (
        <nav>
            <Link to="/events" className="link">
                Events
            </Link>
            <IoIosArrowForward />
            <Link to={"/events/" + eventId} className="link">
                {event.title}
            </Link>
            <IoIosArrowForward />
            <p className="current-location">Reservation</p>
        </nav>
    );
    return (
        <ContentSection
            header={{
                title: "Signing up for the " + event.title,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam.",
            }}
            nav={nav}
        >
            <EventReservationForm event={event} />
        </ContentSection>
    );
};

export default EventReservation;
