import { useState, useEffect } from "react";
import menu from "./menu";
import MenuCategory from "./MenuCategory/MenuCategory";
import Footer from "../Footer/Footer";
import "./Menu.css";

const Menu = () => {
    const [highlightedCategory, setHighlightedCategory] = useState(
        menu[0].name
    );
    const categoriesInNavbar = document.querySelector(".menu-page__navigation");

    useEffect(() => {
        const handleScroll = () => {
            const categories = document.querySelectorAll(
                ".menu-page__menu-category"
            );

            categories.forEach((category) => {
                const rect = category.getBoundingClientRect();
                if (rect.top <= categoriesInNavbar.offsetHeight) {
                    setHighlightedCategory(category.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="section page-content">
            <nav className="menu-page__navigation">
                {menu.map((category) => (
                    <a
                        className={`menu-page__navigation__link ${
                            highlightedCategory === category.name
                                ? "highlighted"
                                : ""
                        }`}
                        key={category.name}
                        href={"#" + category.name}
                    >
                        {category.name}
                    </a>
                ))}
            </nav>

            <main className="menu">
                {menu.map((category) => (
                    <MenuCategory key={category} category={category} />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Menu;
