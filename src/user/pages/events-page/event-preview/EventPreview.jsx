import dayjs from "dayjs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Cover from "../../../components/cover/Cover";

import styles from "./EventPreview.module.scss";

const EventPreview = ({ event }) => {
    const { id, title, subtitle, photo, date } = event;

    return (
        <Link
            className={styles.container}
            data-testid="event-preview"
            key={id}
            to={`/events/${id}`}
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

EventPreview.propTypes = {
    event: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        photo: PropTypes.string,
        date: PropTypes.string.isRequired,
    }).isRequired,
};

export default EventPreview;
