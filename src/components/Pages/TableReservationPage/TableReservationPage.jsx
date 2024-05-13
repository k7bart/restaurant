import ContentSection from "../../ContentSection";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import ReservationForm from "./TableReservationForm";
import TwoSectionsPage from "../../TwoSectionsPage";
import image from "../../../assets/cake.jpeg";

function TableReservationPage() {
    const title = "Reservation";
    const header = {
        title: "Book a table",
        text: "In order to align with the relaxed and comfortable ambiance of our dining setting, we encourage a casual attire.",
    };

    return (
        <TwoSectionsPage title={title}>
            <CoverSection>
                <Cover
                    subtitle="Book a table"
                    title={title}
                    backgroundImage={image}
                />
            </CoverSection>
            <ContentSection header={header}>
                <ReservationForm />
            </ContentSection>
        </TwoSectionsPage>
    );
}

export default TableReservationPage;
