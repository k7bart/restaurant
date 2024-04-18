import Menu from "./Menu.jsx";
import { Outlet } from "react-router-dom";

function MenuPage() {
    return (
        <>
            <Outlet />
            <Menu />
        </>
    );
}

export default MenuPage;
