import PageWithCover from "../../PageWithCover/PageWithCover.jsx";
import Menu from "./Menu.jsx";
import { Outlet } from "react-router-dom";

function MenuPage() {
    return (
        <PageWithCover
            cover={<Outlet />}
            section={<Menu />}
            addLogo={true}
            addNavBar={true}
        />
    );
}

export default MenuPage;
