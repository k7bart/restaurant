import { Address, Category } from "@k7bart/restaurant-shared-types";

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
        photo: "https://ik.imagekit.io/k7bart/restaurant/events/cupping.jpeg?updatedAt=1720593702132",
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
        photo: "https://ik.imagekit.io/k7bart/restaurant/events/honey.webp?updatedAt=1720593702338",
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
        photo: "https://ik.imagekit.io/k7bart/restaurant/events/cheese-degustation.webp?updatedAt=1720593702234",
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
        photo: "https://ik.imagekit.io/k7bart/restaurant/events/casablanca.webp?updatedAt=1720593725421",
        price: 49,
        specialGuest: null,
        subtitle: "Old",
        title: "Movies and Wine",
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

export const menu: Category[] = [
    {
        name: "breakfast",
        dishes: [
            {
                name: "Croque Madame",
                category: "breakfast",
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
                    { name: "calories", amount: 721, unit: "kcal" },
                    { name: "proteins", amount: 37, unit: "g" },
                    { name: "fats", amount: 37, unit: "g" },
                    { name: "carbohydrates", amount: 57, unit: "g" },
                ],
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/breakfast/croque-madame.webp?updatedAt=1720593159472",
                ],
                price: 29,
                discountPercent: 5,
                isVegan: false,
                isDishOfTheDay: true,
            },
            {
                name: "Crêpes Suzette",
                category: "breakfast",
                id: "crepes-suzette",
                description:
                    "Crêpes Suzette is a classic French dessert featuring thin crêpes flambéed with a sauce of caramelized sugar, butter, orange juice, zest, and Grand Marnier or orange liqueur.",
                ingredients: ["crêpes", "beurre suzette", "whipped cream"],
                nutrients: [
                    { name: "calories", amount: 241, unit: "kcal" },
                    { name: "proteins", amount: 4, unit: "g" },
                    { name: "fats", amount: 15, unit: "g" },
                    { name: "carbohydrates", amount: 35, unit: "g" },
                ],
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/breakfast/crepes-suzette.webp?updatedAt=1720593159493",
                ],
                price: 24,
                discountPercent: 10,
                isVegan: false,
                isDishOfTheDay: false,
            },
            {
                name: "Banana Pancakes",
                category: "breakfast",
                id: "banana-pancakes",
                description:
                    "Indulge in fluffy, golden vegan banana pancakes made with sweet banana purée – a delightful, guilt-free breakfast treat.",
                ingredients: ["pancakes", "banana", "maple syrop"],
                nutrients: [
                    { name: "calories", amount: 166, unit: "kcal" },
                    { name: "proteins", amount: 5, unit: "g" },
                    { name: "fats", amount: 6, unit: "g" },
                    { name: "carbohydrates", amount: 26, unit: "g" },
                ],
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/breakfast/banana-pancakes.webp?updatedAt=1720593369684",
                ],
                price: 12,
                isVegan: true,
                isDishOfTheDay: false,
            },
        ],
    },

    {
        name: "desserts",
        dishes: [
            {
                name: "Raspberry-Coconut Tart",
                category: "desserts",
                nutrients: [
                    { name: "calories", amount: 721, unit: "kcal" },
                    { name: "proteins", amount: 37, unit: "g" },
                    { name: "fats", amount: 37, unit: "g" },
                    { name: "carbohydrates", amount: 57, unit: "g" },
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
                discountPercent: undefined,
                isVegan: false,
                isDishOfTheDay: false,
            },
        ],
    },
    {
        name: "beverages",
        dishes: [
            {
                name: "Espresso",
                category: "beverages",
                id: "espresso",
                price: 2,
                discountPercent: undefined,
                isVegan: true,
            },
            {
                name: "Cappuccino",
                category: "beverages",
                id: "cappuccino",
                ingredients: ["espresso", "milk"],
                description:
                    "An espresso-based coffee drink that is traditionally prepared with steamed milk including a layer of milk foam.",
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/coffee/cappuccino.webp?updatedAt=1720604130807",
                ],
                price: 3,
                discountPercent: undefined,
                isVegan: false,
                isDishOfTheDay: false,
                nutrients: [
                    { name: "calories", amount: 150, unit: "kcal" },
                    { name: "proteins", amount: 8, unit: "g" },
                    { name: "fats", amount: 7, unit: "g" },
                    { name: "carbohydrates", amount: 12, unit: "g" },
                ],
            },
            {
                name: "Lavender Latte",
                category: "beverages",
                id: "lavender-latte",
                ingredients: ["espresso", "milk infused with lavender"],
                description:
                    "A soothing latte crafted with milk delicately infused with aromatic lavender, offering a serene and floral twist to your coffee experience.",
                photos: [
                    "https://ik.imagekit.io/k7bart/restaurant/menu/coffee/lavender-latte.webp?updatedAt=1720604184471",
                ],
                price: 4,
                discountPercent: undefined,
                isVegan: false,
                isDishOfTheDay: false,
                nutrients: [
                    { name: "calories", amount: 120, unit: "kcal" },
                    { name: "proteins", amount: 8, unit: "g" },
                    { name: "fats", amount: 6, unit: "g" },
                    { name: "carbohydrates", amount: 10, unit: "g" },
                ],
            },
        ],
    },
];

export const addresses: Address[] = [
    {
        id: "svobody6/1",
        city: "Lviv",
        street: "Svobody",
        house: "6",
        apartment: "1",
        entrance: "1",
        floor: "1",
        intercom: "1",
    },
    {
        id: "hetmana-mazepy25/1",
        city: "Lviv",
        street: "Hetmana Mazepy",
        house: "25",
        apartment: "1",
        entrance: "1",
        floor: "1",
        intercom: "1",
        addressComment: "Address comment",
    },
];
