import cupping from "../../assets/events/cupping.jpeg";
import honey from "../../assets/events/honey.jpeg";
import cheeseDegustation from "../../assets/events/cheese-degustation.jpeg";

const events = [
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
];

export default events;
