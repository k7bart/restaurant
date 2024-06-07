import { useSelector } from "react-redux";
import AccordionItem from "./AccordionItem";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import DeliveryAddresses from "./DeliveryAddresses/DeliveryAddresses";
import OrderHistory from "./OrderHistory";
import PersonalData from "./PersonalData";
import TwoSectionsPage from "../../TwoSectionsPage";
import ContentSection from "../../ContentSection";
import image from "../../../assets/covers/table-in-cafe.jpeg";

const UserProfilePage = () => {
    const header = {
        title: "Personal profile",
        text: "Manage your personal information and preferences here.",
    };
    const user = useSelector((state) => state.user);

    const Accordion = () => {
        return (
            <div className="accordion">
                <OrderHistory user={user} />
                <PersonalData user={user} />
                <DeliveryAddresses user={user} />
                {/* <AccordionItem title="Referral link and promo code" />
                <AccordionItem title="Message" /> */}
            </div>
        );
    };

    return (
        <TwoSectionsPage title="Profile">
            <CoverSection>
                <Cover
                    subtitle="Your presence brightens our day"
                    title={"Hello, " + user.name}
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
