import { Outlet, useParams } from "react-router-dom";
import { events } from "../../../state.js";
import Cover from "../../Cover/Cover.jsx";
import PageWithCover from "../../PageWithCover/PageWithCover.jsx";
import "./EventPage.scss";

const EventPage = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);
    const cover = (
        <Cover
            subtitle={event.subtitle}
            title={event.title}
            backgroundImage={event.photo}
        />
    );

    return (
        <PageWithCover
            cover={cover}
            section={<Outlet />}
            addLogo={true}
            addNavBar={true}
        />
    );
};

export default EventPage;
