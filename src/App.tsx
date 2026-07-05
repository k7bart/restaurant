import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuthBootstrap } from "./hooks/useAuthBootstrap";
import routes from "./AppRoutes";
import CallMePopup from "./components/call-me-popup/CallMePopup";
import Loader from "./components/loader/Loader";

const router = createBrowserRouter(routes);

export default function App() {
    const { isReady } = useAuthBootstrap();

    if (!isReady) return <Loader />;

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
            <CallMePopup />
        </>
    );
}
