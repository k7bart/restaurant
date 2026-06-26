import { useEventData } from "../useEventData";
import { IoIosArrowForward } from "react-icons/io";

import ContentSection from "../../../components/page-sructure/ContentSection/ContentSection";
import ContentSectionNav from "../../../components/page-sructure/ContentSection/ContentSectionNav/ContentSectionNav";
import EventReservationForm from "./EventReservationForm";
import LinkComponent from "../../../components/links/LinkComponent/LinkComponent";
import Text from "../../../components/text/Text";

const EventReservation = () => {
    const event = useEventData();

    return (
        <ContentSection
            title={`Signing up for the ${event.title}`}
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam."
        >
            <ContentSectionNav>
                <LinkComponent to="/events">Events</LinkComponent>

                <IoIosArrowForward />

                <LinkComponent to={`/events/${event.name}`}>
                    {event.title}
                </LinkComponent>

                <IoIosArrowForward />

                <Text color="wisteria" fontWeight="extraLight">
                    Reservation
                </Text>
            </ContentSectionNav>

            <EventReservationForm event={event} />
        </ContentSection>
    );
};

export default EventReservation;
