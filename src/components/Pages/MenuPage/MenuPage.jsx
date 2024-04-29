import Page from "../../Page.jsx";
import Menu from "./Menu.jsx";
import { Outlet } from "react-router-dom";

function MenuPage() {
    return (
        <Page>
            <Outlet />
            <Menu />
        </Page>
    );
}

export default MenuPage;
