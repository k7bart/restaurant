import { useContext } from "react";
import { EventContext } from "./EventPage";

export const useEventData = () => useContext(EventContext);
