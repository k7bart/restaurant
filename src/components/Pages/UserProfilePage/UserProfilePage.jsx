import { useSelector } from "react-redux";
import AccordionItem from "./AccordionItem";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import DeliveryAddresses from "./DeliveryAddresses/DeliveryAddresses";
import OrderHistory from "./OrderHistory";
import PersonalData from "./PersonalData";
import TwoSectionsPage from "../../TwoSectionsPage";
import ContentSection from "../../ContentSection";

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
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/table-in-cafe.webp?updatedAt=1720592232729"
                />
            </CoverSection>
            <ContentSection header={header}>
                <Accordion />
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default UserProfilePage;
