import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { events } from "../../../state";
import dayjs from "dayjs";
import Logo from "../../../common/components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import Cover from "../../components/Cover/Cover";
import Carrousel from "../../components/Carrousel/Carrousel";

const e = events.map((event) => (
    <Link to={`/events/${event.id}`} key={event.id} className="container">
        <Cover
            subtitle={event.subtitle}
            title={event.title}
            backgroundImage={event.photo}
            text={dayjs(event.date).format("DD/MM/YYYY")}
        />
    </Link>
));

const props = {
    content: e,
    num: 3,
    dots: false,
    slideShow: false,
};

const EventsPage = () => {
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
