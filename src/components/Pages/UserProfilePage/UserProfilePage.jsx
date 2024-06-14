import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import AccordionItem from "./AccordionItem";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import DeliveryAddresses from "./DeliveryAddresses/DeliveryAddresses";
import OrderHistory from "./OrderHistory";
import PersonalData from "./PersonalData";
import Referral from "./Referral";
import TwoSectionsPage from "../../TwoSectionsPage";
import ContentSection from "../../ContentSection";

const UserProfilePage = () => {
    const header = {
        title: "Personal profile",
        text: "Manage your personal information and preferences here.",
    };
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Accordion = () => {
        return (
            <div className="accordion">
                <OrderHistory user={user} />
                <PersonalData user={user} />
                <DeliveryAddresses user={user} />
                <Referral id={user.id} />
                {/* // <AccordionItem title="Message" /> */}
            </div>
        );
    };

    const handleLogOut = () => {
        dispatch(logOut());
    };

    useEffect(() => {
        if (!user) {
            navigate("/login"); // or to "/"?
        }
    }, [user, navigate]);

    return user ? (
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
                    <Link className="link" to="/" onClick={handleLogOut}>
                        Log out <IoLogOutOutline />
                    </Link>
                }
            >
                <Accordion />
            </ContentSection>
        </TwoSectionsPage>
    ) : (
        navigate()
    );
};

export default UserProfilePage;
