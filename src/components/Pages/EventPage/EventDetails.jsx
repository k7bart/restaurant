import { useParams, NavLink, Link } from "react-router-dom";
import { events, staff } from "../../../state.js";
import dayjs from "dayjs";
import ContentSection from "../../ContentSection.jsx";
import SpecialGuest from "./SpecialGuest.jsx";

const nav = (
    <nav className="content-evenly">
        {events.map((event) => (
            <NavLink to={`/events/${event.id}`} className="link" key={event.id}>
                {event.title}
            </NavLink>
        ))}
    </nav>
);

const header = {
    title: "Reserve Your Spot",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam.",
};

const EventDetails = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);
    const { id, ageLimit, date, language, menu, price, specialGuest } = event;
    const guest = staff.find((person) => person.name === specialGuest);

    return (
        <ContentSection nav={nav} header={header}>
            <span className="reservation">
                <Link to={`/events/${id}/reservation`}>
                    <button className="small color">Book a spot</button>
                </Link>
                {ageLimit && <h4>{ageLimit}+</h4>}
                <h4>${price}</h4>
            </span>

            <div>
                <h3>Details</h3>
                <div className="row">
                    <p className="large">Date</p>
                    <p className="large white">
                        {dayjs(date).format("DD/MM/YYYY")}
                    </p>
                </div>

                {guest && (
                    <div className="row">
                        <p className="large">Special guest</p>
                        <span className="special-guest">
                            <img src={guest.photo} alt={guest.name} />
                            <p className="large white">{guest.name}</p>
                        </span>
                    </div>
                )}

                <div className="row">
                    <p className="large">Location</p>
                    <p className="large white">Lviv</p>
                </div>
                <div className="row">
                    <p className="large">Language</p>
                    <p className="large white">{language}</p>
                </div>
            </div>

            {menu && (
                <div>
                    <h3>Menu</h3>
                    {menu.map((item) => (
                        <div className="row" key={item}>
                            <p className="large white">{item}</p>
                        </div>
                    ))}
                </div>
            )}

            {guest && <SpecialGuest guest={guest} />}

            <div className="with-button">
                <Link to={`/events/${id}/reservation`}>
                    <button className="large color">Book a spot</button>
                </Link>
            </div>
        </ContentSection>
    );
};

export default EventDetails;
