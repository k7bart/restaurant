import ContentSection from "../../components/TwoSectionsPage/ContentSection/ContentSection";
import Cover from "../../components/Cover/Cover";
import CoverSection from "../../components/TwoSectionsPage/CoverSection/CoverSection";
import ReservationForm from "./ReservationForm";
import TwoSectionsPage from "../../components/TwoSectionsPage/TwoSectionsPage";

const title = "Reservation";
const header = {
    title: "Book a table",
    text: "In order to align with the relaxed and comfortable ambiance of our dining setting, we encourage a casual attire.",
};

function TableReservationPage() {
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
