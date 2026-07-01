import dayjs from "dayjs";
import { Link } from "react-router-dom";
import type { Event } from "@k7bart/restaurant-shared-types";
import Cover from "../../../components/half-page-cover/Cover";
import styles from "./EventPreview.module.scss";

const EventPreview = ({ event }: { event: Event }) => {
    const { id, date, title, photo, subtitle, pathName } = event;

    return (
        <Link
            className={styles.container}
            data-testid="event-preview"
            key={id}
            to={`/events/${pathName}`}
        >
            <Cover
                subtitle={subtitle}
                title={title}
                backgroundImage={photo}
                text={dayjs(date).format("DD/MM/YYYY")}
            />
        </Link>
    );
};

export default EventPreview;
