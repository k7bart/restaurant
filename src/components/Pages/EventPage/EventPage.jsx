import { Outlet, useParams } from "react-router-dom";
import { events } from "../../../state.js";
import Cover from "../../Cover/Cover.jsx";
import CoverSection from "../../CoverSection";
import TwoSectionsPage from "../../TwoSectionsPage";
import "./EventPage.scss";

const EventPage = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);

    return (
        <TwoSectionsPage title={event.title}>
            <CoverSection>
                <Cover
                    subtitle={event.subtitle}
                    title={event.title}
                    backgroundImage={event.photo}
                />
            </CoverSection>
            <Outlet />
        </TwoSectionsPage>
    );
};

export default EventPage;
