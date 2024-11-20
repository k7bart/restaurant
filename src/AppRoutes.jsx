import AdminPage from "./admin/pages/AdminPage";
import CartPage from "./user/pages/CartPage/CartPage";
import Dashboard from "./admin/pages/Dashboard";
import EventDetails from "./user/pages/EventPage/EventDetails/EventDetails";
import EventPage from "./user/pages/EventPage/EventPage";
import EventReservation from "./user/pages/EventPage/EventReservation/EventReservation";
import EventsPage from "./user/pages/events-page/EventsPage";
import ErrorPage from "./user/pages/ErrorPage/ErrorPage";
import FrontPage from "./user/pages/FrontPage/FrontPage";
import LoginPage from "./user/pages/LoginPage/LoginPage";
import Menu from "./user/pages/menu-page/menu/Menu";
import MenuPage from "./user/pages/menu-page/MenuPage";
import Orders from "./admin/pages/Orders";
import ProductPage from "./user/pages/ProductPage/ProductPage";
import RegistrationPage from "./user/pages/RegistrationPage/RegistrationPage";
import ReservationPage from "./user/pages/ReservationPage/ReservationPage";
import ProfilePage from "./user/pages/ProfilePage/ProfilePage";
import ReservationsTable from "./admin/pages/ReservationsTable";

const routes = [
    {
        path: "/",
        element: <FrontPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "reservations",
                element: <ReservationsTable />,
            },
            {
                path: "orders",
                element: <Orders />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
        ],
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
        element: <ReservationPage />,
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
        element: <ProfilePage />,
    },
];
export default routes;
