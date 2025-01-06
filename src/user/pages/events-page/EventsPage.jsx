import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Carrousel from "../../components/Carrousel/Carrousel";
import EventPreview from "./event-preview/EventPreview";
import Logo from "../../../common/components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";

import styles from "./EventsPage.module.scss";
import { eventService } from "../../../services/event-service";

const EventsPage = () => {
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        eventService
            .getEvents()
            .then((response) => setEventsData(response.data))
            .catch((error) => console.error("Failed to fetch events:", error));
    }, []);

    return (
        <div>
            <Helmet>
                <title>Events</title>
            </Helmet>
            <Logo additionalStyles={styles.logo} />
            <Carrousel
                content={eventsData.map((event) => (
                    <EventPreview key={event.id} event={event} />
                ))}
                num={3}
                dots={false}
                slideShow={false}
            />
            <NavBar additionalStyles={styles.navbar} />
        </div>
    );
};

export default EventsPage;
