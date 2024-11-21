import { useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { events } from "../../../../state.js";

import ContentSection from "../../../components/page-sructure/ContentSection/ContentSection.jsx";
import ContentSectionNav from "../../../components/page-sructure/ContentSection/ContentSectionNav/ContentSectionNav.jsx";
import EventReservationForm from "./EventReservationForm.jsx";
import LinkComponent from "../../../components/links/LinkComponent/LinkComponent.jsx";
import Text from "../../../components/Text/Text.jsx";

const EventReservation = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);
    const nav = (
        <ContentSectionNav>
            <LinkComponent to="/events">Events</LinkComponent>

            <IoIosArrowForward />

            <LinkComponent to={"/events/" + eventId}>
                {event.title}
            </LinkComponent>

            <IoIosArrowForward />

            <Text color="wisteria" fontWeight="extraLight">
                Reservation
            </Text>
        </ContentSectionNav>
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
