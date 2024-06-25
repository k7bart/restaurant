import CartPage from "./components/Pages/CartPage/CartPage";
import EventDetails from "./components/Pages/EventPage/EventDetails";
import EventPage from "./components/Pages/EventPage/EventPage";
import EventReservation from "./components/Pages/EventPage/EventReservation/EventReservation";
import EventsPage from "./components/Pages/EventsPage";
import FrontPage from "./components/Pages/FrontPage";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import MenuPage from "./components/Pages/MenuPage/MenuPage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import RegistrationPage from "./components/Pages/RegistrationPage/RegistrationPage";
import TableReservationPage from "./components/Pages/TableReservationPage/TableReservationPage";
import UserProfilePage from "./components/Pages/ProfilePage/ProfilePage";

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
    },
    {
        path: "/menu/:category/:productId",
        element: <ProductPage />,
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
        path: "/registration",
        element: <RegistrationPage />,
    },
    {
        path: "/profile",
        element: <UserProfilePage />,
    },
];
export default routes;
