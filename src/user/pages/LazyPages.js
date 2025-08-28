import { lazy } from "react";

/* Cart */
export const CartLazyPage = lazy(() => import("./cart-page/CartPage.jsx"));
export const CartLazy = lazy(() => import("./cart-page/cart/Cart.jsx"));
export const CheckoutLazy = lazy(() =>
    import("./cart-page/checkout/Checkout.jsx")
);

/* Event */
export const EventLazyPage = lazy(() => import("./event-page/EventPage.jsx"));
export const EventDetailsLazy = lazy(() =>
    import("./event-page/event-details/EventDetails.jsx")
);
export const EventReservationLazy = lazy(() =>
    import("./event-page/event-reservation/EventReservation.jsx")
);

export const EventsLazyPage = lazy(() =>
    import("./events-page/EventsPage.jsx")
);

export const LoginLazyPage = lazy(() => import("./login-page/LoginPage.jsx"));

export const ProductLazyPage = lazy(() =>
    import("./product-page/ProductPage.jsx")
);

export const ProfileLazyPage = lazy(() =>
    import("./profile-page/ProfilePage.jsx")
);

export const RegistrationLazyPage = lazy(() =>
    import("./registration-page/RegistrationPage.jsx")
);

export const ReservationLazyPage = lazy(() =>
    import("./reservation-page/ReservationPage.jsx")
);
