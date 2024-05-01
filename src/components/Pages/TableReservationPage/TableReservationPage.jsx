import Cover from "../../Cover/Cover";
import Footer from "../../Footer/Footer";
import PageWithCover from "../../PageWithCover/PageWithCover";
import ReservationForm from "./TableReservationForm";
import image from "../../../assets/cake.jpeg";

function TableReservationPage() {
    const cover = (
        <Cover
            subtitle={"Book a table"}
            title={"Reservation"}
            backgroundImage={image}
        />
    );

    const section = (
        <section className="section">
            <div className="content">
                <header>
                    <h3>Book a table</h3>
                    <p className="text">
                        In order to align with the relaxed and comfortable
                        ambiance of our dining setting, we encourage a casual
                        attire.
                    </p>
                </header>

                <ReservationForm />
                <Footer />
            </div>
        </section>
    );

    return (
        <PageWithCover
            cover={cover}
            section={section}
            addLogo={true}
            addNavBar={true}
        />
    );
}

export default TableReservationPage;
