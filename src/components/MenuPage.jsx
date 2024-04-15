import Cover from "./Cover.jsx";
import Menu from "./Menu.jsx";

function MenuPage() {
    return (
        <div className="page">
            <Cover subtitle={"Check Out"} title={"Our Menu"} />
            <Menu />
        </div>
    );
}

export default MenuPage;
