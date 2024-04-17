import React from "react";
import Footer from "../Footer";
import "./Reservation.scss";

function Reservation() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="section page-content reservation-content">
            <h3 className="h1-white">Book a table</h3>
            <p className="text">
                In order to align with the relaxed and comfortable ambiance of
                our dining setting, we encourage a casual attire.
            </p>
            <form className="form">
                <label>
                    <p>Name</p>
                    <input></input>
                </label>
                <div>
                    <label>
                        <p>Number of guests</p>
                        <input></input>
                    </label>
                    <label>
                        <p>Number of children</p>
                        <input></input>
                    </label>
                </div>
                <div>
                    <label>
                        <p> e-mail</p>
                        <input></input>
                    </label>
                    <label>
                        <p> Phone</p>
                        <input></input>
                    </label>
                </div>
                <div>
                    <label>
                        <p> Date</p>
                        <input placeholder="DD.MM.YY"></input>
                    </label>
                    <label>
                        <p> Time</p>
                        <input></input>
                    </label>
                </div>
                <label>
                    <p>Additional requirements</p>
                    <textarea></textarea>
                </label>
                <button onClick={(e) => handleSubmit(e)}>BOOK A TABLE</button>
            </form>

            <Footer />
        </div>
    );
}

export default Reservation;
