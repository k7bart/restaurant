import {
    CartLazy,
    CartLazyPage,
    CheckoutLazy,
    EventDetailsLazy,
    EventLazyPage,
    EventReservationLazy,
    EventsLazyPage,
    LoginLazyPage,
    ProductLazyPage,
    ProfileLazyPage,
    RegistrationLazyPage,
    ReservationLazyPage,
} from "./user/pages/LazyPages";
import ErrorPage from "./user/pages/error-page/ErrorPage";
import FrontPage from "./user/pages/front-page/FrontPage";
import MenuPage from "./user/pages/menu-page/MenuPage";

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
        path: "/cart",
        element: <CartLazyPage />,
        children: [
            {
                index: true,
                element: <CartLazy />,
            },
            {
                path: "checkout",
                element: <CheckoutLazy />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginLazyPage />,
    },
    {
        path: "/menu",
        element: <MenuPage />,
    },
    {
        path: "/menu/:category/:productId",
        element: <ProductLazyPage />,
    },
    {
        path: "/table-reservation",
        element: <ReservationLazyPage />,
    },
    {
        path: "/events",
        element: <EventsLazyPage />,
    },
    {
        path: "/events/:eventId",
        element: <EventLazyPage />,
        children: [
            {
                index: true,
                element: <EventDetailsLazy />,
            },
            {
                path: "reservation",
                element: <EventReservationLazy />,
            },
        ],
    },
    {
        path: "/registration",
        element: <RegistrationLazyPage />,
    },
    {
        path: "/profile",
        element: <ProfileLazyPage />,
    },
];
export default routes;
