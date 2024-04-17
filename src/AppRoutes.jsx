import HomePage from "./components/HomePage/HomePage";
import MenuPage from "./components/Menu/MenuPage";
import ReservationPage from "./components/Reservation/ReservationPage";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/menu",
        element: <MenuPage />,
    },
    {
        path: "/reservation",
        element: <ReservationPage />,
    },
];
export default routes;
