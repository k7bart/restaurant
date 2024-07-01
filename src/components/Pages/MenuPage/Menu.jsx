import { useState, useEffect } from "react";
import { menu } from "../../../state";
import { capitalize } from "../../../utils/stringUtils";
import debounce from "../../../utils/debounce";
import Category from "./Category";
import ContentSection from "../../ContentSection";

const handleClick = (id) => () => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

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

    const nav = (
        <nav className="content-evenly">
            {menu.map((category) => (
                <a
                    className={`link ${
                        activeCategory === category.name ? "active" : ""
                    }`}
                    key={category.name}
                    onClick={handleClick(category.name)}
                >
                    {capitalize(category.name)}
                </a>
            ))}
        </nav>
    );

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
