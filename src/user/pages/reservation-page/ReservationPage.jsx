import ContentSection from "../../components/page-sructure/ContentSection/ContentSection";
import Cover from "../../components/cover/Cover";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import ReservationForm from "./ReservationForm";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";
import { reservationPageBackgroundUrl } from "../../../constants/backgroundUrls";

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
                    backgroundImage={reservationPageBackgroundUrl}
                />
            </CoverSection>
            <ContentSection header={header}>
                <ReservationForm />
            </ContentSection>
        </TwoSectionsPage>
    );
}

export default TableReservationPage;
