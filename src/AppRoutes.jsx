import AdminPage from "./components/Pages/admin/pages/AdminPage";
import CartPage from "./components/Pages/CartPage/CartPage";
import Dashboard from "./components/Pages/admin/pages/Dashboard";
import EventDetails from "./components/Pages/EventPage/EventDetails";
import EventPage from "./components/Pages/EventPage/EventPage";
import EventReservation from "./components/Pages/EventPage/EventReservation/EventReservation";
import EventsPage from "./components/Pages/EventsPage";
import FrontPage from "./components/Pages/FrontPage";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import Menu from "./components/Pages/admin/pages/Menu";
import MenuPage from "./components/Pages/MenuPage/MenuPage";
import Orders from "./components/Pages/admin/pages/Orders";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import RegistrationPage from "./components/Pages/RegistrationPage/RegistrationPage";
import ReservationPage from "./components/Pages/ReservationPage/ReservationPage";
import UserProfilePage from "./components/Pages/ProfilePage/ProfilePage";
import Table from "./components/Pages/admin/Reservations/ReservationsTable";

const routes = [
    {
        path: "/",
        element: <FrontPage />,
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
                element: <Table />,
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
        element: <UserProfilePage />,
    },
];
export default routes;
