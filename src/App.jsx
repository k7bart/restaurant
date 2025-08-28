import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./AppRoutes";
import CallMePopup from "./user/components/call-me-popup/CallMePopup";

const router = createBrowserRouter(routes);

export default function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
            <CallMePopup />
        </>
    );
}
