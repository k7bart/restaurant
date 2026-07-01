import CoverSection from "../../components/page-sructure/cover-section/CoverSection";
import TwoSectionsPage from "../../components/page-sructure/two-sections-page/TwoSectionsPage";
import Menu from "./menu/Menu";

const MenuPage = () => (
    <TwoSectionsPage title="Menu">
        <CoverSection
            subtitle="Check Out"
            title="Our Menu"
            backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/cruffins.webp?updatedAt=1720592352070"
        />

        <Menu />
    </TwoSectionsPage>
);

export default MenuPage;
