import { useState, useEffect } from "react";
import menu from "./menu";

const Menu = () => {
    const [highlightedCategory, setHighlightedCategory] = useState(
        menu[0].name
    );

    useEffect(() => {
        const handleScroll = () => {
            const categories = document.querySelectorAll(".menu-category");
            const navbar = document.querySelector(".menu-navigation");

            categories.forEach((category) => {
                const rect = category.getBoundingClientRect();
                if (rect.top <= navbar.offsetHeight) {
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
            <nav className="menu-navigation">
                {menu.map((category) => (
                    <a
                        className={`menu-navigation__link ${
                            highlightedCategory === category.name &&
                            "highlighted"
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
        </div>
    );
};

const MenuCategory = ({ index, category }) => {
    return (
        <div className="menu-category" id={category.name}>
            <h3 className="menu-category__name">{category.name}</h3>
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
                        {dish.isVegan && <Leaf />}
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

const Leaf = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.3825 13.3273 3.32829 13.9965 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C7.25218 3.33333 5.89562 3.89524 4.89543 4.89543C3.89524 5.89562 3.33333 7.25218 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                fill="#F8D49E"
            />
        </svg>
    );
};

export default Menu;
