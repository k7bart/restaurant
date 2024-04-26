import { useState, useEffect } from "react";
import menu from "./menu";
import MenuCategory from "./MenuCategory/MenuCategory";
import Footer from "../Footer/Footer";
import "./Menu.scss";

const Menu = () => {
    const [highlightedCategory, setHighlightedCategory] = useState(
        menu[0].name
    );

    useEffect(() => {
        const handleScroll = () => {
            const categoriesInNavbar =
                document.querySelector(".menu_navigation");
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
        <div className="section">
            <div className="content">
                <nav className="navigation">
                    {menu.map((category) => (
                        <a
                            className={`link ${
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
                        <MenuCategory key={category.name} category={category} />
                    ))}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Menu;
