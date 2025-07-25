import AdminPage from "./admin/pages/AdminPage";
import Cart from "./user/pages/cart-page/cart/Cart";
import CartPage from "./user/pages/cart-page/CartPage";
import Checkout from "./user/pages/cart-page/checkout/Checkout";
import Dashboard from "./admin/pages/Dashboard";
import EventDetails from "./user/pages/event-page/event-details/EventDetails";
import EventPage from "./user/pages/event-page/EventPage";
import EventReservation from "./user/pages/event-page/event-reservation/EventReservation";
import EventsPage from "./user/pages/events-page/EventsPage";
import ErrorPage from "./user/pages/ErrorPage/ErrorPage";
import FrontPage from "./user/pages/front-page/FrontPage";
import LoginPage from "./user/pages/login-page/LoginPage";
import Menu from "./user/pages/menu-page/menu/Menu";
import MenuPage from "./user/pages/menu-page/MenuPage";
import Orders from "./admin/pages/Orders";
import ProductPage from "./user/pages/product-page/ProductPage";
import ProfilePage from "./user/pages/profile-page/ProfilePage";
import RegistrationPage from "./user/pages/registration-page/RegistrationPage";
import ReservationPage from "./user/pages/reservation-page/ReservationPage";
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
        children: [
            {
                index: true,
                element: <Cart />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
        ],
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
