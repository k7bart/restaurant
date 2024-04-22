import Cover from "../Cover";
import ReservationForm from "./ReservationForm";
import Footer from "../Footer/Footer";
import image from "../../assets/cake.jpeg";
import "./Reservation.scss";

function Reservation() {
    return (
        <>
            <Cover
                subtitle={"Book a table"}
                title={"Reservation"}
                backgroundImage={image}
            />
            <div className="section page-content reservation-content">
                <div>
                    <h3 className="h1-white">Book a table</h3>
                    <p className="text">
                        In order to align with the relaxed and comfortable
                        ambiance of our dining setting, we encourage a casual
                        attire.
                    </p>
                </div>

                <ReservationForm />

                <Footer />
            </div>
        </>
    );
}

export default Reservation;
