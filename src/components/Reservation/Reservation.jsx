import PageWithCover from "../PageWithCover/PageWithCover";
import Cover from "../Cover/Cover";
import ReservationForm from "./ReservationForm";
import Footer from "../Footer/Footer";
import image from "../../assets/cake.jpeg";

function Reservation() {
    const cover = (
        <Cover
            subtitle={"Book a table"}
            title={"Reservation"}
            backgroundImage={image}
        />
    );

    const section = (
        <div className="section">
            <div className="content">
                <div>
                    <h3>Book a table</h3>
                    <p className="text">
                        In order to align with the relaxed and comfortable
                        ambiance of our dining setting, we encourage a casual
                        attire.
                    </p>
                </div>

                <ReservationForm />

                <Footer />
            </div>
        </div>
    );

    return <PageWithCover cover={cover} section={section}></PageWithCover>;
}

export default Reservation;
