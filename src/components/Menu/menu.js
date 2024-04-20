import croqueMadame from "../../assets/breakfast/croque-madame.jpeg";
import tart1 from "../../assets/desserts/tart-raspberry-coconut-1.jpeg";
import tart2 from "../../assets/desserts/tart-raspberry-coconut-2.jpeg";
import tart3 from "../../assets/desserts/tart-raspberry-coconut-3.jpeg";
import cappuccino from "../../assets/coffee/cappuccino.jpeg";
import lavenderLatte from "../../assets/coffee/lavender-latte.jpeg";

const menu = [
    {
        name: "Breakfast",
        dishes: [
            {
                name: "Croque Madame",
                id: "croque-madame",
                description: "Description",
                photos: [croqueMadame],
                price: "29",
                isVegan: false,
                isDishOfTheDay: true,
                onSale: false,
                oldPrice: "none",
            },
        ],
    },

    {
        name: "Desserts",
        dishes: [
            {
                name: "Raspberry-Coconut Tart",
                id: "raspberry-coconut-tart",
                description: "Description",
                photos: [tart1, tart2, tart3],
                price: "29",
                isVegan: true,
                isDishOfTheDay: false,
                onSale: false,
                oldPrice: "none",
            },
        ],
    },
    {
        name: "Coffee",
        dishes: [
            {
                name: "Cappuccino",
                id: "cappuccino",
                description: "Description",
                photos: [cappuccino],
                price: "3",
                isVegan: false,
                isDishOfTheDay: false,
                onSale: false,
                oldPrice: "none",
            },
            {
                name: "Lavender Latte",
                id: "lavenderLatte",
                description: "Description",
                photos: [lavenderLatte],
                price: "4",
                isVegan: false,
                isDishOfTheDay: false,
                onSale: false,
                oldPrice: "none",
            },
        ],
    },
];

export default menu;
