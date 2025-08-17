import { Helmet } from "react-helmet";
import { events } from "../../../state";
import Carrousel from "../../components/carrousel/Carrousel";
import EventPreview from "./event-preview/EventPreview";
import Logo from "../../../common/components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./EventsPage.module.scss";

const props = {
    content: events.map((event) => (
        <EventPreview key={event.id} event={event} />
    )),
    num: 3,
    dots: true,
    slideShow: true,
};

const EventsPage = () => {
    return (
        <div>
            <Helmet>
                <title>Events</title>
            </Helmet>
            <Logo additionalStyles={styles.logo} />
            <Carrousel {...props} />
            <NavBar additionalStyles={styles.navbar} />
        </div>
    );
};

export default EventsPage;
