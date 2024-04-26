import Page from "../Page";
import Cover from "../Cover/Cover";
import ReservationForm from "./ReservationForm";
import Footer from "../Footer/Footer";
import image from "../../assets/cake.jpeg";

function Reservation() {
    return (
        <Page>
            <Cover
                subtitle={"Book a table"}
                title={"Reservation"}
                backgroundImage={image}
            />
            <div className="section">
                <div className="content">
                    <div>
                        <h3>Book a table</h3>
                        <p className="text">
                            In order to align with the relaxed and comfortable
                            ambiance of our dining setting, we encourage a
                            casual attire.
                        </p>
                    </div>

                    <ReservationForm />

                    <Footer />
                </div>
            </div>
        </Page>
    );
}

export default Reservation;
