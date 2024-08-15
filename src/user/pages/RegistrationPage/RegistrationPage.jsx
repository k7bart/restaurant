import Cover from "../../components/Cover/Cover";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import ContentSection from "../../components/page-sructure/ContentSection/ContentSection";
import LinkComponent from "../../components/LinkComponent/LinkComponent";
import RegistrationForm from "./RegistrationForm";
import Text from "../../components/Text/Text";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";

const RegistrationPage = () => {
    return (
        <TwoSectionsPage title="Registration" className="registration-page">
            <CoverSection>
                <Cover
                    subtitle="For a smoother experience"
                    title="Register"
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/mango-passion-fruit-tart.webp?updatedAt=1720592608890"
                />
            </CoverSection>
            <ContentSection
                header={{
                    title: "Taste the Difference",
                    text: "Register to place your order easily. Fill out the form below to get started.",
                }}
            >
                <RegistrationForm />

                <Text align="center" size="large">
                    Already registered?&nbsp;
                    <LinkComponent color="wisteria" to="/login" size="large">
                        Sign in
                    </LinkComponent>
                </Text>
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default RegistrationPage;
