import { registrationsPageBackgroundUrl } from "../../constants/backgroundUrls";

import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import ContentSection from "../../components/page-sructure/ContentSection/ContentSection";
import RegistrationForm from "./RegistrationForm";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";

const RegistrationPage = () => {
    return (
        <TwoSectionsPage title="Registration">
            <CoverSection
                subtitle="For a smoother experience"
                title="Register"
                backgroundImage={registrationsPageBackgroundUrl}
            />
            <ContentSection
                title="Taste the Difference"
                subtitle="Register to place your order easily. Fill out the form below to get started"
            >
                <RegistrationForm />
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default RegistrationPage;
