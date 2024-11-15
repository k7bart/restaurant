import { useState, useEffect } from "react";
import { menu } from "../../../../state";
import debounce from "../../../../utils/debounce";
import Category from "./Category/Category";
import ContentSection from "../../../components/page-sructure/ContentSection/ContentSection";
import MenuNavigation from "./menu-navigation/MenuNavigation";

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(menu[0].name);

    const handleScroll = () => {
        const navbar = document.querySelector("nav");
        const categories = document.querySelectorAll(".category");

        categories.forEach((category) => {
            const rect = category.getBoundingClientRect();
            if (
                rect.bottom > navbar.offsetHeight + 20 &&
                rect.top < navbar.offsetHeight + 20
            ) {
                setActiveCategory(category.id);
            }
        });
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    useEffect(() => {
        window.addEventListener("scroll", debouncedHandleScroll);
        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
        };
    });

    const nav = <MenuNavigation activeCategory={activeCategory} />;

    return (
        <ContentSection nav={nav}>
            <section className="menu">
                {menu.map((category) => (
                    <Category key={category.name} category={category} />
                ))}
            </section>
        </ContentSection>
    );
};

export default Menu;
