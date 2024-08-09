import { NavLink } from "react-router-dom";
import ContentSection from "../../components/TwoSectionsPage/ContentSection/ContentSection";
import Cover from "../../components/Cover/Cover";
import CoverSection from "../../components/TwoSectionsPage/TwoSectionsPage";
import LoginForm from "./LoginForm";
import TwoSectionsPage from "../../components/TwoSectionsPage/TwoSectionsPage";

const LoginPage = () => {
    return (
        <TwoSectionsPage title="Login" className="login-page">
            <CoverSection>
                <Cover
                    subtitle="Unlock with Your Credentials"
                    title="Log in"
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/rosemary-lemon-cake.jpeg?updatedAt=1720592065786"
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
