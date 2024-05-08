import TwoSectionsPage from "../../TwoSectionsPage.jsx";
import Menu from "./Menu.jsx";
import { Outlet } from "react-router-dom";

function MenuPage() {
    return (
        <TwoSectionsPage>
            <Outlet />
            <Menu />
        </TwoSectionsPage>
    );
}

export default MenuPage;
