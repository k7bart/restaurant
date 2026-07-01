import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Carrousel from "../../components/carrousel/Carrousel";
import EventPreview from "./event-preview/EventPreview";
import Logo from "../../components/logo/Logo";
import NavBar from "../../components/nav-bar/NavBar";
import { eventService } from "../../services/event-service";

import type { Event } from "@k7bart/restaurant-shared-types";

import styles from "./EventsPage.module.scss";

const EventsPage = () => {
    const [eventsData, setEventsData] = useState<Event[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await eventService.getEvents();
                setEventsData(response.data);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            }
        };

        fetchEvents();
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
            />
            <NavBar additionalStyles={styles.navbar} />
        </div>
    );
};

export default EventsPage;
