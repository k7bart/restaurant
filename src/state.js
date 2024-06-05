import cupping from "./assets/events/cupping.jpeg";
import honey from "./assets/events/honey.jpeg";
import cheeseDegustation from "./assets/events/cheese-degustation.jpeg";
import casablanca from "./assets/events/casablanca.jpeg";
export const events = [
    {
        id: "cupping",
        photo: cupping,
        subtitle: "The Art of",
        title: "Coffee Cupping",
        date: "June 16, 2024",
        price: 49,
        specialGuest: null,
        language: "Italian",
    },
    {
        id: "honey",
        photo: honey,
        subtitle: "Local",
        title: "Honey Degustation",
        date: "March 17, 2024",
        price: 49,
        specialGuest: "Bob Bobert",
        language: "English",
    },
    {
        id: "cheese-degustation",
        photo: cheeseDegustation,
        subtitle: "French",
        title: "Cheeses Tasting",
        date: "May 16, 2024",
        price: 89,
        specialGuest: "Remy Ratatouille",
        language: "French",
    },
    {
        id: "movies-and-wine",
        photo: casablanca,
        subtitle: "Old",
        title: "Movies and Wine",
        date: "March 30, 2024",
        price: 49,
        specialGuest: null,
        language: "English",
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
                description: "Description",
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
                description: "Description",
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
                description: "Description",
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
                description: "Description",
                photos: [cappuccino],
                price: 3,
                isVegan: false,
                isDishOfTheDay: false,
                onSale: false,
                oldPrice: null,
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

export const links = [
    { to: "/menu", text: "Menu" },
    { to: "/table-reservation", text: "Book a table" },
    { to: "/events", text: "Events" },
];
