import ContentSection from "../../components/page-sructure/ContentSection/ContentSection";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import ReservationForm from "./ReservationForm";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";
import { reservationPageBackgroundUrl } from "../../constants/backgroundUrls";

const title = "Reservation";

const ReservationPage = () => (
    <TwoSectionsPage title={title}>
        <CoverSection
            subtitle="Book a table"
            title={title}
            backgroundImage={reservationPageBackgroundUrl}
        />
        <ContentSection
            title="Book a table"
            subtitle="In order to align with the relaxed and comfortable ambiance of our dining setting, we encourage a casual attire"
        >
            <ReservationForm />
        </ContentSection>
    </TwoSectionsPage>
);

export default ReservationPage;
