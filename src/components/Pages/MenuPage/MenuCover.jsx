import Cover from "../../Cover/Cover";
import image from "../../../assets/cruffins.jpeg";

const MenuCover = () => {
    return (
        <Cover
            subtitle={"Check Out"}
            title={"Our Menu"}
            backgroundImage={image}
        />
    );
};

export default MenuCover;
