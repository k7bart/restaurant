import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import Accordion from "../../components/Accordion/Accordion";
import ContentSection from "../../components/TwoSectionsPage/ContentSection/ContentSection";
import Cover from "../../components/Cover/Cover";
import CoverSection from "../../components/TwoSectionsPage/CoverSection/CoverSection";
import DeliveryAddresses from "./DeliveryAddresses/DeliveryAddresses";
import OrderHistory from "./OrderHistory/OrderHistory";
import PersonalData from "./PersonalData";
import Referral from "./Referral/Referral";
import Reservations from "./Reservations/Reservations";
import Tickets from "./Tickets/Tickets";
import TwoSectionsPage from "../../components/TwoSectionsPage/TwoSectionsPage";

const ProfilePage = () => {
    const header = {
        title: "Personal profile",
        text: "Manage your personal information and preferences here.",
    };
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
                        backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/table-in-cafe.jpeg?updatedAt=1718193744098"
                    />
                </CoverSection>
                <ContentSection
                    header={header}
                    nav={
                        <nav className="content-left">
                            <Link
                                className="link"
                                to="/"
                                onClick={handleLogOut}
                            >
                                Log out <IoLogOutOutline />
                            </Link>
                        </nav>
                    }
                >
                    <Accordion items={items} />
                </ContentSection>
            </TwoSectionsPage>
        )
    );
};

export default ProfilePage;
