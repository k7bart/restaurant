import { useParams } from "react-router-dom";
import { events } from "../../../../state.js";

import EventReservationForm from "./EventReservationForm.jsx";
import Footer from "../../../Footer/Footer.jsx";

const EventReservation = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);
    return (
        <section className="section">
            <div className="content">
                <header>
                    <h3>Signing up for the {event.title}</h3>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Porttitor massa id neque aliquam.
                    </p>
                </header>

                <EventReservationForm />
                <Footer />
            </div>
        </section>
    );
};

export default EventReservation;
