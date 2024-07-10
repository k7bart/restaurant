export const events = [
    {
        id: "cupping",
        photo: "https://ik.imagekit.io/k7bart/restaurant/events/cupping.jpeg?updatedAt=1720593702132",
        subtitle: "The Art of",
        title: "Coffee Cupping",
        date: "June 16, 2024",
        price: 49,
        specialGuest: null,
        language: "Italian",
    },
    {
        id: "honey",
        photo: "https://ik.imagekit.io/k7bart/restaurant/events/honey.webp?updatedAt=1720593702338",
        subtitle: "Local",
        title: "Honey Degustation",
        date: "March 17, 2024",
        price: 49,
        specialGuest: "Bob Bobert",
        language: "English",
    },
    {
        id: "cheese-degustation",
        photo: "https://ik.imagekit.io/k7bart/restaurant/events/cheese-degustation.webp?updatedAt=1720593702234",
        subtitle: "French",
        title: "Cheeses Tasting",
        date: "May 16, 2024",
        price: 89,
        specialGuest: "Remy Ratatouille",
        language: "French",
    },
    {
        id: "movies-and-wine",
        photo: "https://ik.imagekit.io/k7bart/restaurant/events/casablanca.webp?updatedAt=1720593725421",
        subtitle: "Old",
        title: "Movies and Wine",
        date: "March 30, 2024",
        price: 49,
        specialGuest: null,
        language: "English",
    },
];

export const staff = [
    {
        name: "Bob Bobert",
        photo: "https://ik.imagekit.io/k7bart/restaurant/staff/beekeeper.jpeg?updatedAt=1720604830992",
        introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },

    {
        name: "Remy Ratatouille",
        photo: "https://ik.imagekit.io/k7bart/restaurant/staff/remy-ratatouille.jpeg?updatedAt=1720604831078",
        introduction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
];

import tart3 from "./assets/desserts/tart-raspberry-coconut-3.jpeg";
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
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/breakfast/croque-madame.webp?updatedAt=1720593159472",
                ],
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
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/breakfast/crepes-suzette.webp?updatedAt=1720593159493",
                ],
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
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/breakfast/banana-pancakes.webp?updatedAt=1720593369684",
                ],
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
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/desserts/tart%20raspberry%20coconut/tart-raspberry-coconut-1.webp?updatedAt=1720604511516",
                    "https://ik.imagekit.io/k7bart/restaurant/menu/desserts/tart%20raspberry%20coconut/tart-raspberry-coconut-2.webp?updatedAt=1720604511490",
                    "https://ik.imagekit.io/k7bart/restaurant/menu/desserts/tart%20raspberry%20coconut/tart-raspberry-coconut-3.jpeg?updatedAt=1720605286287",
                ],
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
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/coffee/cappuccino.webp?updatedAt=1720604130807",
                ],
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
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/coffee/lavender-latte.webp?updatedAt=1720604184471",
                ],
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
