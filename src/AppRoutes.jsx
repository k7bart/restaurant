import EventDetails from "./components/Pages/EventPage/EventDetails";
import EventPage from "./components/Pages/EventPage/EventPage";
import EventReservation from "./components/Pages/EventPage/EventReservation/EventReservation";
import EventsPage from "./components/Pages/EventsPage/EventsPage";
import FrontPage from "./components/Pages/FrontPage/FrontPage";
import MenuPage from "./components/Pages/MenuPage/MenuPage";
import MenuCover from "./components/Pages/MenuPage/MenuCover";
import Product from "./components/Product/Product";
import TableReservationPage from "./components/Pages/TableReservationPage/TableReservationPage";

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
                element: <MenuCover />,
            },
            {
                path: ":category/:productId",
                element: <Product />,
            },
        ],
    },
    {
        path: "/table-reservation",
        element: <TableReservationPage />,
    },
    {
        path: "/events",
        element: <EventsPage />,
    },
    {
        path: "/events/:eventId",
        element: <EventPage />,
        children: [
            {
                index: true,
                element: <EventDetails />,
            },
            {
                path: "reservation",
                element: <EventReservation />,
            },
        ],
    },
];
export default routes;
