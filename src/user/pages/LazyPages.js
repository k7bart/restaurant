import { lazy } from "react";

export const EventsLazyPage = lazy(() =>
    import("./events-page/EventsPage.jsx")
);

export const MenuLazyPage = lazy(() => import("./menu-page/MenuPage.jsx"));
