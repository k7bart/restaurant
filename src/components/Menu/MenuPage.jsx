import Cover from "../Cover.jsx";
import Menu from "./Menu.jsx";
import image from "../../assets/cruffins.jpeg";

function MenuPage() {
    return (
        <div className="page">
            <Cover
                subtitle={"Check Out"}
                title={"Our Menu"}
                backgroundImage={image}
            />
            <Menu />
        </div>
    );
}

export default MenuPage;
