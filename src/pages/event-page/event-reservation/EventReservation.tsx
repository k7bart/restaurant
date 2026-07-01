import { IoIosArrowForward } from "react-icons/io";

import { useEventData } from "../useEventData";
import ContentSection from "../../../components/page-sructure/content-section/ContentSection";
import ContentSectionNav from "../../../components/page-sructure/content-section/content-section-nav/ContentSectionNav";
import EventReservationForm from "./EventReservationForm";
import CustomLink from "../../../components/links/custom-link/CustomLink";
import Text from "../../../components/text/Text";

const EventReservation = () => {
    const event = useEventData();

    return (
        <ContentSection
            title={`Signing up for the ${event.title}`}
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam."
        >
            <ContentSectionNav>
                <CustomLink to="/events">Events</CustomLink>

                <IoIosArrowForward />

                <CustomLink to={`/events/${event.pathName}`}>
                    {event.title}
                </CustomLink>

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
