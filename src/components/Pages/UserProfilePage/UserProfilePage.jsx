import { useSelector } from "react-redux";
import AccordionItem from "./AccordionItem";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import OrderHistory from "./OrderHistory";
import TwoSectionsPage from "../../TwoSectionsPage";
import ContentSection from "../../ContentSection";
import image from "../../../assets/covers/table-in-cafe.jpeg";
import "./UserProfilePage.scss";

const UserProfilePage = () => {
    const header = {
        title: "Personal profile",
        text: "Manage your personal information and preferences here.",
    };
    const userName = useSelector((state) => state.user.name);

    // Order history
    // Personal data
    // Delivery addresses
    // Referral link and promo code
    // Message

    const Accordion = () => {
        return (
            <div className="accordion">
                <OrderHistory />
                <AccordionItem title="Personal data" />
            </div>
        );
    };

    return (
        <TwoSectionsPage title="Profile">
            <CoverSection>
                <Cover
                    subtitle="Your presence brightens our day"
                    title={"Hello, " + userName}
                    backgroundImage={image}
                />
            </CoverSection>
            <ContentSection header={header}>
                <Accordion />
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default UserProfilePage;
