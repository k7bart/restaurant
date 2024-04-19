import Cover from "./components/Cover";
import HomePage from "./components/HomePage/HomePage";
import MenuPage from "./components/Menu/MenuPage";
import Product from "./components/Product/Product";
import Reservation from "./components/Reservation/Reservation";
import image from "./assets/cruffins.jpeg";
import EventsPage from "./components/EventsPage/EventsPage";

const routes = [
    {
        path: "/",
        element: <HomePage />,
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
        element: <Reservation />,
    },
    { path: "/events", element: <EventsPage /> },
];
export default routes;
