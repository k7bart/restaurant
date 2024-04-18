import Cover from "./components/Cover";
import HomePage from "./components/HomePage/HomePage";
import MenuPage from "./components/Menu/MenuPage";
import Product from "./components/Product/Product";
import Reservation from "./components/Reservation/Reservation";
import image from "./assets/cruffins.jpeg";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/menu",
        element: <MenuPage />,
        children: [
            {
                index: true,
                element: (
                    <Cover
                        subtitle={"Check Out"}
                        title={"Our Menu"}
                        backgroundImage={image}
                    />
                ),
            },
            {
                path: ":productId", // Dynamic route parameter for product
                element: <Product />,
            },
        ],
    },
    {
        path: "/reservation",
        element: <Reservation />,
    },
];
export default routes;
