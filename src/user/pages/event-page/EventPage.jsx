import { Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";
import { events } from "../../../state.js";
import Cover from "../../components/half-page-cover/Cover.jsx";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection.jsx";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage.jsx";

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
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </TwoSectionsPage>
    );
};

export default EventPage;
