import { NavLink } from "react-router-dom";
import ContentSection from "../../ContentSection";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import RegistrationForm from "./RegistrationForm";
import TwoSectionsPage from "../../TwoSectionsPage";

const RegistrationPage = () => {
    return (
        <TwoSectionsPage title="Registration" className="registration-page">
            <CoverSection>
                <Cover
                    subtitle="For a smoother experience"
                    title="Register"
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/mango-passion-fruit-tart.jpeg?updatedAt=1718193744646"
                />
            </CoverSection>
            <ContentSection
                header={{
                    title: "Taste the Difference",
                    text: "Register to place your order easily. Fill out the form below to get started.",
                }}
            >
                <RegistrationForm />

                <p className="large center">
                    Already registered?&nbsp;
                    <NavLink className="large wisteria" to="/login">
                        Sign in
                    </NavLink>
                </p>
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default RegistrationPage;
