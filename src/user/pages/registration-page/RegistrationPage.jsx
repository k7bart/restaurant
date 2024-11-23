import { registrationsPageBackgroundUrl } from "../../../constants/backgroundUrls";

import Cover from "../../components/cover/Cover";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import ContentSection from "../../components/page-sructure/ContentSection/ContentSection";
import RegistrationForm from "./RegistrationForm";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";

const RegistrationPage = () => {
    return (
        <TwoSectionsPage title="Registration">
            <CoverSection>
                <Cover
                    subtitle="For a smoother experience"
                    title="Register"
                    backgroundImage={registrationsPageBackgroundUrl}
                />
            </CoverSection>
            <ContentSection
                header={{
                    title: "Taste the Difference",
                    text: "Register to place your order easily. Fill out the form below to get started.",
                }}
            >
                <RegistrationForm />
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default RegistrationPage;
