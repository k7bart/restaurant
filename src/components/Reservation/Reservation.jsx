import Cover from "../Cover";
import Footer from "../Footer/Footer";
import image from "../../assets/cake.jpeg";
import "./Reservation.scss";
import { useState } from "react";
import { isPhoneValid } from "../../utils/validation";

function Reservation() {
    const [phone, setPhone] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phone) console.log("PHONE!");
        if (phone) console.log(isPhoneValid(phone));
    };

    return (
        <>
            <Cover
                subtitle={"Book a table"}
                title={"Reservation"}
                backgroundImage={image}
            />
            <div className="section page-content reservation-content">
                <h3 className="h1-white">Book a table</h3>
                <p className="text">
                    In order to align with the relaxed and comfortable ambiance
                    of our dining setting, we encourage a casual attire.
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
                            <input
                                type="tel"
                                required
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                            ></input>
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
                    <button onClick={(e) => handleSubmit(e)}>
                        BOOK A TABLE
                    </button>
                </form>

                <Footer />
            </div>
        </>
    );
}

export default Reservation;
