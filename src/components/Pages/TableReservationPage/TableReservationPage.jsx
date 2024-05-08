import ContentSection from "../../ContentSection";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import ReservationForm from "./TableReservationForm";
import TwoSectionsPage from "../../TwoSectionsPage";
import image from "../../../assets/cake.jpeg";

function TableReservationPage() {
    const header = {
        title: "Book a table",
        text: "In order to align with the relaxed and comfortable ambiance of our dining setting, we encourage a casual attire.",
    };

    return (
        <TwoSectionsPage>
            <CoverSection>
                <Cover
                    subtitle={"Book a table"}
                    title={"Reservation"}
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
