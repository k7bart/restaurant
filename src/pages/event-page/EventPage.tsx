import { createContext, useEffect, useState, Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";
import type { Event } from "@k7bart/restaurant-shared-types";

import CoverSection from "../../components/page-sructure/cover-section/CoverSection";
import TwoSectionsPage from "../../components/page-sructure/two-sections-page/TwoSectionsPage";
import { eventService } from "../../services/event-service";

export const EventContext = createContext<Event | null>(null);

const EventPage = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const [eventData, setEventData] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!eventId) return;

        const fetchEvent = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await eventService.getEventByName(eventId);
                setEventData(res.data);
            } catch (err) {
                console.error("Failed to fetch event:", err);
                setError("Failed to load event. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [eventId]);

    if (loading) return <p>Loading...</p>;
    if (error || !eventData) return <p>{error ?? "Event not found"}</p>;

    return (
        <EventContext.Provider value={eventData}>
            <TwoSectionsPage title={eventData.title}>
                <CoverSection
                    subtitle={eventData.subtitle}
                    title={eventData.title}
                    backgroundImage={eventData.photo}
                />
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </TwoSectionsPage>
        </EventContext.Provider>
    );
};

export default EventPage;
