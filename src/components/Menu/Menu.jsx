import MenuCategory from "./MenuCategory";

import tomatoToast from "../../assets/starters/tomato-toast.jpg";
import noodleSoup from "../../assets/starters/noodle-soup.jpeg";
import pumpkinSoup from "../../assets/starters/pumpkin-soup.jpg";

function Menu() {
    const categories = ["Starters", "Lunch", "Dinner", "Wine", "Drinks"];
    const categories2 = [
        {
            name: "Starters",
            dishes: [
                {
                    name: "Tomato Toast",
                    description: "Description",
                    imageSrc: tomatoToast,
                    price: "29",
                    isVegan: true,
                    isDishOfTheDay: false,
                    onSale: false,
                    oldPrice: "none",
                },
                {
                    name: "Noodle Soup",
                    description: "Description",
                    imageSrc: noodleSoup,
                    price: "5",
                    isVegan: false,
                    isDishOfTheDay: false,
                    onSale: true,
                    oldPrice: "8",
                },
                {
                    name: "Pumpkin Soup",
                    description: "Description",
                    imageSrc: pumpkinSoup,
                    price: "5",
                    isVegan: false,
                    isDishOfTheDay: true,
                    onSale: false,
                    oldPrice: "none",
                },
            ],
        },
    ];

    return (
        <div className="section">
            <ul className="categories">
                {categories.map((category) => (
                    <li className="category" key={category}>
                        {category}
                    </li>
                ))}
            </ul>

            <main className="menu">
                {categories2.map((category) => (
                    <MenuCategory key={category} category={category} />
                ))}
            </main>
        </div>
    );
}

export default Menu;
