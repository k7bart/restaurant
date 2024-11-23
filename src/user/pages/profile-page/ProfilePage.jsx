import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/index.js";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { profilePageBackgroundUrl } from "../../../constants/backgroundUrls.js";

import Accordion from "../../components/Accordion/Accordion.jsx";
import Cover from "../../components/cover/Cover.jsx";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection.jsx";
import ContentSection from "../../components/page-sructure/ContentSection/ContentSection.jsx";
import ContentSectionNav from "../../components/page-sructure/ContentSection/ContentSectionNav/ContentSectionNav.jsx";
import DeliveryAddresses from "./delivery-addresses/DeliveryAddresses.jsx";
import OrderHistory from "./order-history/OrderHistory.jsx";
import PersonalData from "./PersonalData.jsx";
import Referral from "./referral/Referral.jsx";
import Reservations from "./reservations/Reservations.jsx";
import Tickets from "./tickets/Tickets.jsx";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage.jsx";
import LinkComponent from "../../components/links/LinkComponent/LinkComponent.jsx";

const header = {
    title: "Personal profile",
    text: "Manage your personal information and preferences here.",
};

const ProfilePage = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(logOut());
    };

    useEffect(() => {
        if (!user) {
            navigate("/login"); // or to "/"?
        }
    }, [user, navigate]);

    const items = [
        {
            title: "Order history",
            content: <OrderHistory orders={user.orders} />,
        },
        {
            title: "Table reservations",
            content: <Reservations reservationIds={user.reservationIds} />,
        },
        {
            title: "Tickets",
            content: <Tickets tickets={user.tickets} />,
        },
        {
            title: "Personal data",
            content: <PersonalData user={user} />,
        },
        {
            title: "Delivery addresses",
            content: <DeliveryAddresses user={user} />,
        },
        {
            title: "Referral link and promo code",
            content: <Referral id={user.id} />,
        },
    ];

    return (
        user && (
            <TwoSectionsPage title="Profile" className="profile-page">
                <CoverSection>
                    <Cover
                        subtitle="Your presence brightens our day"
                        title={"Hello, " + user.name}
                        backgroundImage={profilePageBackgroundUrl}
                    />
                </CoverSection>
                <ContentSection header={header}>
                    <ContentSectionNav justifyContent="contentRight">
                        <LinkComponent
                            className="link"
                            to="/"
                            onClick={handleLogOut}
                        >
                            Log out <IoLogOutOutline />
                        </LinkComponent>
                    </ContentSectionNav>

                    <Accordion items={items} />
                </ContentSection>
            </TwoSectionsPage>
        )
    );
};

export default ProfilePage;
