import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage.jsx";
import Menu from "./menu/Menu.jsx";

function MenuPage() {
    return (
        <TwoSectionsPage title="Menu" className="menu-page">
            <CoverSection
                subtitle="Check Out"
                title="Our Menu"
                backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/cruffins.webp?updatedAt=1720592352070"
            />

            <Menu />
        </TwoSectionsPage>
    );
}

export default MenuPage;
