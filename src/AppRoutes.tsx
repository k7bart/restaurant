import {
    CartLazy,
    CartLazyPage,
    CheckoutLazy,
    EventDetailsLazy,
    EventLazyPage,
    EventReservationLazy,
    EventsLazyPage,
    MenuLazyPage,
    LoginLazyPage,
    DishLazyPage,
    ProfileLazyPage,
    RegistrationLazyPage,
    ReservationLazyPage,
} from "./pages/LazyPages";
import ErrorPage from "./pages/error-page/ErrorPage";
import FrontPage from "./pages/front-page/FrontPage";
import HomeRedirect from "./components/home-redirect/HomeRedirect";
import LoginRedirect from "./components/login-redirect/LoginRedirect";

const pageRoutes = [
    {
        path: "/",
        element: <FrontPage />,
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
        path: "/menu",
        element: <MenuLazyPage />,
    },
    {
        path: "/menu/:category/:dishId",
        element: <DishLazyPage />,
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
];

const catchAllRoute = {
    path: "*",
    element: <ErrorPage />,
};

const authRoutes = [
    {
        path: "/login",
        element: <LoginLazyPage />,
    },
    {
        path: "/registration",
        element: <RegistrationLazyPage />,
    },
];

const protectedRouteEntries = [
    {
        path: "/profile",
        element: <ProfileLazyPage />,
    },
];

export const publicRoutes = [
    ...pageRoutes,
    ...authRoutes,
    ...protectedRouteEntries.map(({ path }) => ({
        path,
        element: <LoginRedirect />,
    })),
    catchAllRoute,
];

export const protectedRoutes = [
    ...pageRoutes,
    ...authRoutes.map(({ path }) => ({
        path,
        element: <HomeRedirect />,
    })),
    ...protectedRouteEntries,
    catchAllRoute,
];
