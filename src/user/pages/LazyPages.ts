import { lazy } from "react";

/* Cart */
export const CartLazyPage = lazy(() => import("./cart-page/CartPage"));
export const CartLazy = lazy(() => import("./cart-page/cart/Cart"));
export const CheckoutLazy = lazy(() => import("./cart-page/checkout/Checkout"));

/* Event */
export const EventLazyPage = lazy(() => import("./event-page/EventPage"));
export const EventDetailsLazy = lazy(
    () => import("./event-page/event-details/EventDetails")
);
export const EventReservationLazy = lazy(
    () => import("./event-page/event-reservation/EventReservation")
);

export const EventsLazyPage = lazy(() => import("./events-page/EventsPage"));

export const LoginLazyPage = lazy(() => import("./login-page/LoginPage"));

export const ProductLazyPage = lazy(() => import("./product-page/ProductPage"));

export const ProfileLazyPage = lazy(() => import("./profile-page/ProfilePage"));

export const RegistrationLazyPage = lazy(
    () => import("./registration-page/RegistrationPage")
);

export const ReservationLazyPage = lazy(
    () => import("./reservation-page/ReservationPage")
);
