import { useParams, NavLink, Link } from "react-router-dom";
import { events, staff } from "../../../state.js";
import Footer from "../../Footer/Footer.jsx";
import SpecialGuest from "./SpecialGuest/SpecialGuest.jsx";

const EventDetails = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);
    const guest = staff.find((person) => person.name === event.specialGuest);

    return (
        <section className="content event-page">
            <nav className="navigation">
                {events.map((event, i) => (
                    <NavLink
                        to={`/events/${event.id}`}
                        className="link"
                        key={i}
                    >
                        {event.title}
                    </NavLink>
                ))}
            </nav>
            <div className="content">
                <div>
                    <header>
                        <h3>Reserve Your Spot</h3>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Porttitor massa id neque
                            aliquam.
                        </p>
                    </header>

                    <div className="reservation">
                        <Link to={`/events/${event.id}/reservation`}>
                            <button className="small-color-button">
                                BOOK A SPOT
                            </button>
                        </Link>
                        <h4>${event.price}</h4>
                    </div>

                    <section className="subsection">
                        <h3>Details</h3>
                        <div className="details">
                            <div>
                                <h4>Date</h4>
                                <p>{event.date}</p>
                            </div>

                            {guest && (
                                <div>
                                    <h4>Special guest</h4>
                                    <div className="special-guest">
                                        <img src={guest.photo} alt="" />
                                        <p>{guest.name}</p>
                                    </div>
                                </div>
                            )}

                            <div>
                                <h4>Location</h4>
                                <p>Lviv</p>
                            </div>
                            <div>
                                <h4>Language</h4>
                                <p>{event.language}</p>
                            </div>
                        </div>
                    </section>

                    <section className="subsection">
                        <h3>Menu</h3>
                    </section>

                    {guest && <SpecialGuest guest={guest} />}
                </div>

                <Footer />
            </div>
        </section>
    );
};

export default EventDetails;
