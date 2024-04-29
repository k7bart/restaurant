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
import tart1 from "./assets/desserts/tart-raspberry-coconut-1.jpeg";
import tart2 from "./assets/desserts/tart-raspberry-coconut-2.jpeg";
import tart3 from "./assets/desserts/tart-raspberry-coconut-3.jpeg";
import cappuccino from "./assets/coffee/cappuccino.jpeg";
import lavenderLatte from "./assets/coffee/lavender-latte.jpeg";
export const menu = [
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
