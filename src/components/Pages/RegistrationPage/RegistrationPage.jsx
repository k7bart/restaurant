import { NavLink } from "react-router-dom";
import ContentSection from "../../ContentSection";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import RegistrationForm from "./RegistrationForm";
import TwoSectionsPage from "../../TwoSectionsPage";
import image from "../../../assets/covers/mango-passion-fruit-tart.jpeg";

const RegistrationPage = () => {
    return (
        <TwoSectionsPage title="Registration" className="registration-page">
            <CoverSection>
                <Cover
                    subtitle="For a smoother experience"
                    title="Register"
                    backgroundImage={image}
                />
            </CoverSection>
            <ContentSection
                header={{
                    title: "Taste the Difference",
                    text: "Register to place your order easily. Fill out the form below to get started.",
                }}
            >
                <RegistrationForm />

                <p className="large">
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
