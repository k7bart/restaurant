import { useSelector } from "react-redux";
import AccordionItem from "./AccordionItem";
import ContentSection from "../../ContentSection";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import DeliveryAddresses from "./DeliveryAddresses/DeliveryAddresses";
import OrderHistory from "./OrderHistory";
import PersonalData from "./PersonalData";
import Referral from "./Referral";
import Reservations from "./Reservations";
import TwoSectionsPage from "../../TwoSectionsPage";

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
                <Reservations reservations={user.reservations} />
                <PersonalData user={user} />
                <DeliveryAddresses user={user} />
                <Referral id={user.id} />
                {/* // <AccordionItem title="Message" /> */}
            </div>
        );
    };

    return (
        <TwoSectionsPage title="Profile" className="profile-page">
            <CoverSection>
                <Cover
                    subtitle="Your presence brightens our day"
                    title={"Hello, " + user.name}
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/table-in-cafe.jpeg?updatedAt=1718193744098"
                />
            </CoverSection>
            <ContentSection header={header}>
                <Accordion />
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default UserProfilePage;
