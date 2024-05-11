import { useState, useEffect } from "react";
import { menu } from "../../../state";
import MenuCategory from "./MenuCategory/MenuCategory";
import Footer from "../../Footer/Footer";

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(menu[0].name);

    const handleClick = (id) => () => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handleScroll = () => {
        const navbar = document.querySelector(".navigation");
        const categories = document.querySelectorAll(
            ".menu-page__menu-category"
        );

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

    const links = menu.map((category) => (
        <a
            className={`link ${
                activeCategory === category.name ? "active" : ""
            }`}
            key={category.name}
            onClick={handleClick(category.name)}
        >
            {category.name}
        </a>
    ));

    return (
        <section className="content">
            <nav className="navigation">{links}</nav>
            <div className="content">
                <section className="menu">
                    {menu.map((category) => (
                        <MenuCategory key={category.name} category={category} />
                    ))}
                </section>
                <Footer />
            </div>
        </section>
    );
};

export default Menu;

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
