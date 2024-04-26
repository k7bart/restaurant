import React from "react";
import { useParams } from "react-router-dom";
import Page from "../../Page.jsx";
import Cover from "../../Cover/Cover";
import Footer from "../../Footer/Footer.jsx";
import events from "../events.js";
import stuff from "../stuff.js";
import "./EventPage.scss";
import { NavLink } from "react-router-dom";

import SpecialGuest from "./SpecialGuest/SpecialGuest";

const EventPage = () => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);
    const guest = stuff.find((person) => person.name === event.specialGuest);

    return (
        <Page>
            <Cover
                subtitle={event.subtitle}
                title={event.title}
                backgroundImage={event.photo}
            />
            <div className="section event-page">
                <div className="content">
                    <nav className="navigation">
                        {events.map((event) => (
                            <NavLink
                                to={`/events/${event.id}`}
                                className="link"
                                key={event.id}
                            >
                                {event.title}
                            </NavLink>
                        ))}
                    </nav>
                    <div>
                        <header>
                            <h3>Reserve Your Spot</h3>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Porttitor massa id neque aliquam.
                            </p>
                        </header>

                        <div className="reservation">
                            <button className="small-color-button">
                                BOOK A SPOT
                            </button>
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
            </div>
        </Page>
    );
};

export default EventPage;