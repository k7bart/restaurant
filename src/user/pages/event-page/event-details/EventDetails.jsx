import dayjs from "dayjs";

import { useParams, Link } from "react-router-dom";
import { events, staff } from "../../../../state.js";

import Button from "../../../../common/components/buttons/Button/Button.jsx";
import ContentSection from "../../../components/page-sructure/ContentSection/ContentSection.jsx";
import ContentSectionNav from "../../../components/page-sructure/ContentSection/ContentSectionNav/ContentSectionNav.jsx";
import NavLinkComponent from "../../../components/links/NavLinkComponent/NavLinkComponent.jsx";
import Row from "../../../../common/components/Row/Row.jsx";
import SpecialGuest from "./special-guest/SpecialGuest.jsx";
import Text from "../../../components/Text/Text.jsx";

import styles from "./EventDetails.module.scss";

const nav = (
    <ContentSectionNav justifyContent="contentEvenly">
        {events.map((event) => (
            <NavLinkComponent to={`/events/${event.id}`} key={event.id}>
                {event.title}
            </NavLinkComponent>
        ))}
    </ContentSectionNav>
);

const header = {
    title: "Reserve Your Spot",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam.",
};

const EventDetails = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);
    const { id, ageLimit, date, language, menu, price, specialGuest } = event;
    const guest = staff.find((person) => person.name === specialGuest);

    return (
        <ContentSection nav={nav} header={header}>
            <div className={styles.eventDetails}>
                <span className={styles.mainInfo}>
                    <Link to={`/events/${id}/reservation`}>
                        <Button>Book a spot</Button>
                    </Link>

                    {ageLimit && <h4>{ageLimit}+</h4>}

                    <h4>${price}</h4>
                </span>

                <div>
                    <h3>Details</h3>
                    <Row>
                        <Text size="large">Date</Text>
                        <Text color="white" size="large">
                            {dayjs(date).format("DD/MM/YYYY")}
                        </Text>
                    </Row>

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

                    <Row>
                        <Text size="large">Location</Text>
                        <Text color="white" size="large">
                            Lviv
                        </Text>
                    </Row>

                    <Row>
                        <Text size="large">Language</Text>
                        <Text color="white" size="large">
                            {language}
                        </Text>
                    </Row>
                </div>

                {menu && (
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

                <Link to={`/events/${id}/reservation`}>
                    <Button additionalStyles={styles.button} size="large">
                        Book a spot
                    </Button>
                </Link>
            </div>
        </ContentSection>
    );
};

export default EventDetails;
