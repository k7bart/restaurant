import { NavLink } from "react-router-dom";
import ContentSection from "../../ContentSection";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import LoginForm from "./LoginForm";
import TwoSectionsPage from "../../TwoSectionsPage";
import image from "../../../assets/covers/rosemary-lemon-cake.jpeg";

const LoginPage = () => {
    return (
        <TwoSectionsPage title="Login" className="login-page">
            <CoverSection>
                <Cover
                    subtitle="Unlock with Your Credentials"
                    title="Log in"
                    backgroundImage={image}
                />
            </CoverSection>
            <ContentSection
                header={{
                    title: "Savor the Moment",
                    text: "Welcome back! Sign in to explore our delicious menu and place your order with ease.",
                }}
            >
                <LoginForm />

                <p className="large">
                    Don't have an account yet?&nbsp;
                    <NavLink className="large wisteria" to="/registration">
                        Register
                    </NavLink>
                </p>
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default LoginPage;
