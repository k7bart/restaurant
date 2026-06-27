import dayjs from "dayjs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Cover from "../../../components/half-page-cover/Cover";

import styles from "./EventPreview.module.scss";

const EventPreview = ({ event }) => {
    const { _id, date, name, photo, subtitle, title } = event;

    return (
        <Link
            className={styles.container}
            data-testid="event-preview"
            key={_id}
            to={`/events/${name}`}
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
        _id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        photo: PropTypes.string,
        subtitle: PropTypes.string,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default EventPreview;
