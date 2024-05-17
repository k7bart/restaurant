import CartPage from "./components/Pages/CartPage/CartPage";
import EventDetails from "./components/Pages/EventPage/EventDetails";
import EventPage from "./components/Pages/EventPage/EventPage";
import EventReservation from "./components/Pages/EventPage/EventReservation/EventReservation";
import EventsPage from "./components/Pages/EventsPage/EventsPage";
import FrontPage from "./components/Pages/FrontPage/FrontPage";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import MenuPage from "./components/Pages/MenuPage/MenuPage";
import MenuCover from "./components/Pages/MenuPage/MenuCover";
import Product from "./components/Product/Product";
import TableReservationPage from "./components/Pages/TableReservationPage/TableReservationPage";
import UserProfilePage from "./components/Pages/UserProfilePage/UserProfilePage";

const routes = [
    {
        path: "/",
        element: <FrontPage />,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
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
    {
        path: "/profile",
        element: <UserProfilePage />,
    },
];
export default routes;
