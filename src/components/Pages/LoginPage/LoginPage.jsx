import { NavLink } from "react-router-dom";
import ContentSection from "../../ContentSection";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import LoginForm from "./LoginForm";
import TwoSectionsPage from "../../TwoSectionsPage";

const LoginPage = () => {
    return (
        <TwoSectionsPage title="Login" className="login-page">
            <CoverSection>
                <Cover
                    subtitle="Unlock with Your Credentials"
                    title="Log in"
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/rosemary-lemon-cake.jpeg?updatedAt=1718193744910"
                />
            </CoverSection>
            <ContentSection
                header={{
                    title: "Savor the Moment",
                    text: "Welcome back! Sign in to explore our delicious menu and place your order with ease.",
                }}
            >
                <LoginForm />

                <p className="large center">
                    Don&apos;t have an account yet?&nbsp;
                    <NavLink className="large wisteria" to="/registration">
                        Register
                    </NavLink>
                </p>
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default LoginPage;
