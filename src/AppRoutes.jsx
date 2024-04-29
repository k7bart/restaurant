import Cover from "./components/Cover/Cover";
import Product from "./components/Product/Product";
import image from "./assets/cruffins.jpeg";
import EventPage from "./components/Events/EventPage/EventPage";
import EventsPage from "./components/Pages/EventsPage/EventsPage";
import FrontPage from "./components/Pages/FrontPage/FrontPage";
import MenuPage from "./components/Pages/MenuPage/MenuPage";
import ReservationPage from "./components/Pages/ReservationPage/ReservationPage";

const routes = [
    {
        path: "/",
        element: <FrontPage />,
    },
    {
        path: "/menu",
        element: <MenuPage />,
        children: [
            {
                index: true,
                element: (
                    <Cover
                        subtitle={"Check Out"}
                        title={"Our Menu"}
                        backgroundImage={image}
                    />
                ),
            },
            {
                path: ":category/:productId",
                element: <Product />,
            },
        ],
    },
    {
        path: "/reservation",
        element: <ReservationPage />,
    },
    {
        path: "/events",
        element: <EventsPage />,
    },
    {
        path: "/events/:eventId",
        element: <EventPage />,
    },
];
export default routes;
