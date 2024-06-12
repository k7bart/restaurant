import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection.jsx";
import TwoSectionsPage from "../../TwoSectionsPage.jsx";
import Menu from "./Menu.jsx";

function MenuPage() {
    return (
        <TwoSectionsPage title="Menu" className="menu-page">
            <CoverSection>
                <Cover
                    subtitle={"Check Out"}
                    title={"Our Menu"}
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/cruffins.jpeg?updatedAt=1718193489659"
                />
            </CoverSection>

            <Menu />
        </TwoSectionsPage>
    );
}

export default MenuPage;
