import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import Cover from "../../components/half-page-cover/Cover.jsx";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection.jsx";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage.jsx";
import { eventService } from "../../../services/event-service.js";

export const EventContext = createContext();

const EventPage = () => {
    const { eventId } = useParams();
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        eventService
            .getEventByName(eventId)
            .then((res) => {
                setEventData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch event:", err);
                setError("Failed to load event. Please try again later.");
                setLoading(false);
            });
    }, [eventId]);

    if (loading) return <p>Loading...</p>; // TODO: replace with a proper loading UI
    if (error) return <p>{error}</p>; // TODO: replace with a proper error UI

    return (
        <EventContext.Provider value={eventData}>
            <TwoSectionsPage title={eventData.title}>
                <CoverSection>
                    <Cover
                        subtitle={eventData.subtitle}
                        title={eventData.title}
                        backgroundImage={eventData.photo}
                    />
                </CoverSection>
                <Outlet />
            </TwoSectionsPage>
        </EventContext.Provider>
    );
};

export default EventPage;
