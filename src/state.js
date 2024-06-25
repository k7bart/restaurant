import cupping from "./assets/events/cupping.jpeg";
import honey from "./assets/events/honey.jpeg";
import cheeseDegustation from "./assets/events/cheese-degustation.jpeg";
import casablanca from "./assets/events/casablanca.jpeg";
export const events = [
    {
        id: "cupping",
        ageLimit: 16,
        date: "2024-10-15T09:00:00.000Z",
        language: "Italian",
        menu: [
            "Colombian Supremo",
            "Ethiopian Yirgacheffe",
            "Costa Rican Tarrazu",
            "Sumatra Mandheling",
            "Mocha Java",
        ],
        photo: cupping,
        price: 49,
        specialGuest: null,
        subtitle: "The Art of",
        title: "Coffee Cupping",
    },
    {
        id: "honey",
        ageLimit: null,
        date: "2024-10-15T15:00:00.000Z",
        language: "English",
        menu: [
            "Buckwheat Honey",
            "Lavender Honey",
            "Acacia Honey",
            "Orange Blossom Honey",
            "Heather Honey",
            "Clover Honey",
        ],
        photo: honey,
        price: 49,
        specialGuest: "Bob Bobert",
        subtitle: "Local",
        title: "Honey Degustation",
    },
    {
        id: "cheese-degustation",
        ageLimit: null,
        date: "2024-10-15T15:00:00.000Z",
        language: "French",
        menu: [
            "Monterey Jack",
            "Provolone",
            "Goat Cheese (Chèvre)",
            "Manchego",
            "Havarti",
        ],
        photo: cheeseDegustation,
        price: 89,
        specialGuest: "Remy Ratatouille",
        subtitle: "French",
        title: "Cheeses Tasting",
    },
    {
        id: "movies-and-wine",
        ageLimit: 18,
        date: "2024-10-15T17:00:00.000Z",
        language: "English",
        photo: casablanca,
        price: 49,
        specialGuest: null,
        subtitle: "Old",
        title: "Movies and Wine",
    },
];

import bob from "./assets/staff/beekeeper.jpeg";
import remy from "./assets/staff/remy-ratatouille.jpeg";
export const staff = [
    {
        name: "Bob Bobert",
        photo: bob,
        introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },

    {
        name: "Remy Ratatouille",
        photo: remy,
        introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
];

import croqueMadame from "./assets/breakfast/croque-madame.jpeg";
import crepesSuzette from "./assets/breakfast/crepes-suzette.jpeg";
import bananaPancakes from "./assets/breakfast/banana-pancakes.jpeg";
import tart1 from "./assets/desserts/tart-raspberry-coconut-1.jpeg";
import tart2 from "./assets/desserts/tart-raspberry-coconut-2.jpeg";
import tart3 from "./assets/desserts/tart-raspberry-coconut-3.jpeg";
import cappuccino from "./assets/coffee/cappuccino.jpeg";
import lavenderLatte from "./assets/coffee/lavender-latte.jpeg";
export const menu = [
    {
        name: "breakfast",
        dishes: [
            {
                name: "Croque Madame",
                id: "croque-madame",
                description:
                    "A Croque Madame is a French sandwich made with ham, cheese, and béchamel sauce, topped with a fried or poached egg. It is similar to a Croque Monsieur but distinguished by the addition of the egg.",
                ingredients: [
                    "bread",
                    "ham",
                    "gruyère cheese",
                    "eggs",
                    "dijon mustard",
                    "butter",
                ],
                nutrients: [
                    { name: "calories", amount: 721 },
                    { name: "proteins", amount: 37 },
                    { name: "fats", amount: 37 },
                    { name: "carbohydrates", amount: 57 },
                ],
                photos: [croqueMadame],
                price: "29",
                isVegan: false,
                isDishOfTheDay: true,
                onSale: false,
                oldPrice: "none",
            },
            {
                name: "Crêpes Suzette",
                id: "crepes-suzette",
                description:
                    "Crêpes Suzette is a classic French dessert featuring thin crêpes flambéed with a sauce of caramelized sugar, butter, orange juice, zest, and Grand Marnier or orange liqueur.",
                ingredients: ["crêpes", "beurre suzette", "whipped cream"],
                nutrients: [
                    { name: "calories", amount: 241 },
                    { name: "proteins", amount: 4 },
                    { name: "fats", amount: 15 },
                    { name: "carbohydrates", amount: 35 },
                ],
                photos: [crepesSuzette],
                price: 18,
                isVegan: false,
                isDishOfTheDay: false,
                onSale: true,
                oldPrice: 24,
            },
            {
                name: "Banana Pancakes",
                id: "banana-pancakes",
                description:
                    "Indulge in fluffy, golden vegan banana pancakes made with sweet banana purée – a delightful, guilt-free breakfast treat.",
                ingredients: ["pancakes", "banana", "maple syrop"],
                nutrients: [
                    { name: "calories", amount: 166 },
                    { name: "proteins", amount: 5 },
                    { name: "fats", amount: 6 },
                    { name: "carbohydrates", amount: 26 },
                ],
                photos: [bananaPancakes],
                price: 12,
                isVegan: true,
                isDishOfTheDay: false,
                onSale: false,
                oldPrice: null,
            },
        ],
    },

    {
        name: "desserts",
        dishes: [
            {
                name: "Raspberry-Coconut Tart",
                nutrients: [
                    { name: "calories", amount: 721 },
                    { name: "proteins", amount: 37 },
                    { name: "fats", amount: 37 },
                    { name: "carbohydrates", amount: 57 },
                ],
                ingredients: [
                    "bread",
                    "ham",
                    "gruyère cheese",
                    "eggs",
                    "dijon mustard",
                    "butter",
                ],
                id: "raspberry-coconut-tart",
                description: "Description",
                photos: [tart1, tart2, tart3],
                price: 29,
                isVegan: true,
                isDishOfTheDay: false,
                onSale: false,
                oldPrice: null,
            },
        ],
    },
    {
        name: "coffee",
        dishes: [
            {
                name: "Cappuccino",
                id: "cappuccino",
                ingredients: ["espresso", "milk"],
                description:
                    "An espresso-based coffee drink that is traditionally prepared with steamed milk including a layer of milk foam.",
                photos: [cappuccino],
                price: 3,
                isVegan: false,
                isDishOfTheDay: false,
                onSale: false,
                oldPrice: null,
                nutrients: [
                    { name: "calories", amount: 150 },
                    { name: "proteins", amount: 8 },
                    { name: "fats", amount: 7 },
                    { name: "carbohydrates", amount: 12 },
                ],
            },
            {
                name: "Lavender Latte",
                id: "lavender-latte",
                ingredients: ["espresso", "milk infused with lavender"],
                description:
                    "A soothing latte crafted with milk delicately infused with aromatic lavender, offering a serene and floral twist to your coffee experience.",
                photos: [lavenderLatte],
                price: 4,
                isVegan: false,
                isDishOfTheDay: false,
                onSale: false,
                oldPrice: "none",
                nutrients: [
                    { name: "calories", amount: 120 },
                    { name: "proteins", amount: 8 },
                    { name: "fats", amount: 6 },
                    { name: "carbohydrates", amount: 10 },
                ],
            },
        ],
    },
];
