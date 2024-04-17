import { useState, useEffect } from "react";
import menu from "./menu";
import Footer from "../Footer/Footer";
import "./Menu.css";
import { FaLeaf } from "react-icons/fa";

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

const MenuCategory = ({ index, category }) => {
    return (
        <div className="menu-page__menu-category" id={category.name}>
            <h3 className="menu-page__menu-category__name">{category.name}</h3>
            <div className="menu-category__items-container">
                {category.dishes.map((dish) => (
                    <MenuItem key={dish} dish={dish} />
                ))}
            </div>
        </div>
    );
};

const MenuItem = ({ dish }) => {
    if (!dish) return;
    return (
        <div
            className={`dish-container ${
                dish.isDishOfTheDay && "dish-of-the-day"
            }`}
        >
            {dish.isDishOfTheDay && (
                <p className="badge-dish-of-the-day">Starter of the Day</p>
            )}
            <img className="dish-image" src={dish.imageSrc} alt={dish.name} />
            <div className="dish-content">
                <div className="dish-info">
                    <div className="dish-title">
                        <h4 className="dish-name">{dish.name}</h4>
                        {dish.isVegan && <FaLeaf />}
                    </div>
                    <div className="dish-price">
                        {dish.onSale && (
                            <p className="dish-sale">${dish.oldPrice}</p>
                        )}
                        ${dish.price}
                    </div>
                </div>

                <p className="dish-description">{dish.description}</p>
            </div>
        </div>
    );
};

export default Menu;
