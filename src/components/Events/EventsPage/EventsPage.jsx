import React from "react";
import { Link } from "react-router-dom";
import "./EventsPage.scss";
import events from "../events";
import Logo from "../../Logo/Logo";
import NavBar from "../../NavBar/NavBar";

const EventsPage = () => {
    return (
        <div className="events-page">
            <Logo />

            {events.map((event) => (
                <Link
                    to={`/events/${event.id}`}
                    key={event.id}
                    className="container"
                >
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${event.photo})` }}
                    >
                        <div className="filter">
                            <div className="titles-container">
                                <h2 className="subtitle">{event.subtitle}</h2>
                                <h1 className="title">{event.title}</h1>
                                <p className="date">{event.date}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

            <NavBar />
        </div>
    );
};

export default EventsPage;
