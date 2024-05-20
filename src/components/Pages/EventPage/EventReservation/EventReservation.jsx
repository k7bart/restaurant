import { useParams } from "react-router-dom";
import { events } from "../../../../state.js";
import ContentSection from "../../../ContentSection.jsx";
import EventReservationForm from "./EventReservationForm.jsx";

const EventReservation = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);

    return (
        <ContentSection
            header={{
                title: "Signing up for the " + event.title,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam.",
            }}
        >
            <EventReservationForm />
        </ContentSection>
    );
};

export default EventReservation;
