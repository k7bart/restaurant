import ContentSection from "../../components/page-sructure/ContentSection/ContentSection";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import LoginForm from "./login-form/LoginForm";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";

const LoginPage = () => {
    return (
        <TwoSectionsPage title="Login">
            <CoverSection
                subtitle="Unlock with Your Credentials"
                title="Log in"
                backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/rosemary-lemon-cake.jpeg?updatedAt=1720592065786"
            />
            <ContentSection
                title="Savor the Moment"
                subtitle="Welcome back! Sign in to explore our delicious menu and place your order with ease."
            >
                <LoginForm />
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default LoginPage;
