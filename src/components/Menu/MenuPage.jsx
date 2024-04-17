import Cover from "../Cover.jsx";
import Menu from "./Menu.jsx";
import image from "../../assets/cruffins.jpeg";

function MenuPage() {
    return (
        <>
            <Cover
                subtitle={"Check Out"}
                title={"Our Menu"}
                backgroundImage={image}
            />
            <Menu />
        </>
    );
}

export default MenuPage;
