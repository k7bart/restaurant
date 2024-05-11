import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import image from "../../../assets/cruffins.jpeg";

const MenuCover = () => {
    return (
        <CoverSection>
            <Cover
                subtitle={"Check Out"}
                title={"Our Menu"}
                backgroundImage={image}
            />
        </CoverSection>
    );
};

export default MenuCover;
