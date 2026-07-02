import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { useMe } from "../../hooks/useMe";
import { logOut } from "../../store";
import { authService } from "../../services/auth-service";
import { IoLogOutOutline } from "react-icons/io5";
import { profilePageBackgroundUrl } from "../../constants/backgroundUrls";

import Accordion from "../../components/accordion/Accordion";
import CoverSection from "../../components/page-sructure/cover-section/CoverSection";
import ContentSection from "../../components/page-sructure/content-section/ContentSection";
import ContentSectionNav from "../../components/page-sructure/content-section/content-section-nav/ContentSectionNav";
import DeliveryAddresses from "./delivery-addresses/DeliveryAddresses";
import OrderHistory from "./order-history/OrderHistory";
import PersonalData from "./PersonalData";
import Referral from "./referral/Referral";
import Reservations from "./reservations/Reservations";
import Tickets from "./tickets/Tickets";
import TwoSectionsPage from "../../components/page-sructure/two-sections-page/TwoSectionsPage";

import styles from "./ProfilePage.module.scss";

const items = [
    {
        title: "Order history",
        content: <OrderHistory />,
    },
    {
        title: "Table reservations",
        content: <Reservations />,
    },
    {
        title: "Tickets",
        content: <Tickets />,
    },
    {
        title: "Personal data",
        content: <PersonalData />,
    },
    {
        title: "Delivery addresses",
        content: <DeliveryAddresses />,
    },
    {
        title: "Referral link and promo code",
        content: <Referral />,
    },
];

const ProfilePage = () => {
    const { firstName } = useMe();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        authService.logout();
        dispatch(logOut());
        navigate("/");
    };

    return (
        <TwoSectionsPage title="Profile">
            <CoverSection
                subtitle="Your presence brightens our day"
                title={"Hello, " + firstName}
                backgroundImage={profilePageBackgroundUrl}
            />
            <ContentSection
                title="Personal profile"
                subtitle="Manage your personal information and preferences here"
            >
                <ContentSectionNav justifyContent="contentRight">
                    <button
                        className={styles.logoutButton}
                        onClick={handleLogOut}
                        type="button"
                    >
                        Log out <IoLogOutOutline />
                    </button>
                </ContentSectionNav>

                <Accordion items={items} />
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default ProfilePage;
