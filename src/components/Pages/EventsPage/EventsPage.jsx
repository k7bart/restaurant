import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { events } from "../../../state";
import Logo from "../../Logo/Logo";
import NavBar from "../../NavBar/NavBar";
import Cover from "../../Cover/Cover";
import Carrousel from "../../Carrousel/Carrousel";
import "./EventsPage.scss";

const EventsPage = () => {
    const e = events.map((event) => (
        <Link to={`/events/${event.id}`} key={event.id} className="container">
            <Cover
                subtitle={event.subtitle}
                title={event.title}
                backgroundImage={event.photo}
                text={event.date}
            />
        </Link>
    ));

    const props = {
        content: e,
        num: 3,
        dots: false,
        slideShow: false,
    };

    return (
        <div className="events-page">
            <Helmet>
                <title>Events</title>
            </Helmet>
            <Logo />
            <Carrousel {...props} />
            <NavBar />
        </div>
    );
};

export default EventsPage;
