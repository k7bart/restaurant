import { useContext } from "react";
import type { Event } from "@k7bart/restaurant-shared-types";
import { EventContext } from "./EventPage";

export const useEventData = (): Event => {
    const event = useContext(EventContext);

    if (!event) {
        throw new Error("useEventData must be used within EventContext");
    }

    return event;
};
