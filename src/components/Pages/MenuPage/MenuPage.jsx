import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection.jsx";
import TwoSectionsPage from "../../TwoSectionsPage.jsx";
import Menu from "./Menu.jsx";

import image from "../../../assets/cruffins.jpeg";

function MenuPage() {
    return (
        <TwoSectionsPage title="Menu" className="menu-page">
            <CoverSection>
                <Cover
                    subtitle={"Check Out"}
                    title={"Our Menu"}
                    backgroundImage={image}
                />
            </CoverSection>

            <Menu />
        </TwoSectionsPage>
    );
}

export default MenuPage;
