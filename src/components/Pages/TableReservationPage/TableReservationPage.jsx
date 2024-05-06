import Cover from "../../Cover/Cover";
import PageWithCover from "../../PageWithCover/PageWithCover";
import ReservationForm from "./TableReservationForm";
import Section from "../../Section/Section";
import image from "../../../assets/cake.jpeg";

function TableReservationPage() {
    const header = {
        title: "Book a table",
        text: "In order to align with the relaxed and comfortable ambiance of our dining setting, we encourage a casual attire.",
    };

    const section = (
        <Section header={header}>
            <ReservationForm />
        </Section>
    );

    const cover = (
        <Cover
            subtitle={"Book a table"}
            title={"Reservation"}
            backgroundImage={image}
        />
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
