import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import { staff } from "../../../state";
import { useEventData } from "../useEventData";
import { eventService } from "../../../services/event-service.js";

import Button from "../../../components/buttons/button/Button";
import ContentSection from "../../../components/page-sructure/content-section/ContentSection";
import ContentSectionNav from "../../../components/page-sructure/content-section/content-section-nav/ContentSectionNav";
import CustomNavLink from "../../../components/links/custom-nav-link/CustomNavLink";
import DetailsRow from "./special-guest/DetailsRow";
import Row from "../../../components/row/Row";
import SpecialGuest from "./special-guest/SpecialGuest";
import Text from "../../../components/text/Text";

import styles from "./EventDetails.module.scss";

const EventDetails = () => {
    const event = useEventData();
    const { ageLimit, date, language, menu, name, price, specialGuest } = event;
    const guest = staff.find((person) => person.name === specialGuest);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        eventService
            .getEvents()
            .then((response) => setEvents(response.data))
            .catch((error) => console.error("Failed to fetch events:", error));
    }, []);

    return (
        <ContentSection
            title="Reserve Your Spot"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        >
            <ContentSectionNav justifyContent="contentEvenly">
                {events.map((event) => (
                    <CustomNavLink to={`/events/${event.name}`} key={event._id}>
                        {event.title}
                    </CustomNavLink>
                ))}
            </ContentSectionNav>

            <div className={styles.eventDetails}>
                <span className={styles.mainInfo}>
                    <Link to={`/events/${name}/reservation`}>
                        <Button>Book a spot</Button>
                    </Link>
                    {ageLimit && <h4>{ageLimit}+</h4>}
                    <h4>${price}</h4>
                </span>

                <div>
                    <h3>Details</h3>
                    <DetailsRow
                        label="Date"
                        value={dayjs(date).format("DD/MM/YYYY")}
                    />
                    {guest && (
                        <Row>
                            <Text size="large">Special guest</Text>
                            <span className={styles.specialGuest}>
                                <img src={guest.photo} alt={guest.name} />
                                <Text color="white" size="large">
                                    {guest.name}
                                </Text>
                            </span>
                        </Row>
                    )}
                    <DetailsRow label="Location" value="Lviv" />
                    <DetailsRow label="Language" value={language} />
                </div>

                {menu.length > 0 && (
                    <div>
                        <h3>Menu</h3>
                        {menu.map((item) => (
                            <Row key={item}>
                                <Text color="white" size="large">
                                    {item}
                                </Text>
                            </Row>
                        ))}
                    </div>
                )}

                {guest && <SpecialGuest guest={guest} />}

                <Link to={`/events/${name}/reservation`}>
                    <Button additionalStyles={styles.button} size="large">
                        Book a spot
                    </Button>
                </Link>
            </div>
        </ContentSection>
    );
};

export default EventDetails;
