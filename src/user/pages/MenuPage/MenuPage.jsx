import Cover from "../../components/Cover/Cover.jsx";
import CoverSection from "../../components/TwoSectionsPage/CoverSection/CoverSection.jsx";
import TwoSectionsPage from "../../components/TwoSectionsPage/TwoSectionsPage.jsx";
import Menu from "./Menu.jsx";

function MenuPage() {
    return (
        <TwoSectionsPage title="Menu" className="menu-page">
            <CoverSection>
                <Cover
                    subtitle={"Check Out"}
                    title={"Our Menu"}
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/cruffins.webp?updatedAt=1720592352070"
                />
            </CoverSection>

            <Menu />
        </TwoSectionsPage>
    );
}

export default MenuPage;
