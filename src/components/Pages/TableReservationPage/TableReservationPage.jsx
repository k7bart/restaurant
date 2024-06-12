import ContentSection from "../../ContentSection";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import ReservationForm from "./TableReservationForm";
import TwoSectionsPage from "../../TwoSectionsPage";

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
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/cake.jpeg?updatedAt=1718193803926"
                />
            </CoverSection>
            <ContentSection header={header}>
                <ReservationForm />
            </ContentSection>
        </TwoSectionsPage>
    );
}

export default TableReservationPage;
